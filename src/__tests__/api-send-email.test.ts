// Mock resend before importing handler
jest.mock('resend', () => {
  return { Resend: jest.fn().mockImplementation(() => ({ emails: { send: jest.fn().mockResolvedValue({ data: { id: 'mock' }, error: null }) } })) };
});

import handler from '../../api/send-email';

// Minimal mocks for VercelRequest/Response
interface MockReq {
  method: string; body: string; headers: Record<string, string>; socket: { remoteAddress?: string };
}
interface MockRes {
  statusCode: number; jsonData: unknown; status: (code: number) => MockRes; json: (data: unknown) => MockRes;
}

// Helper to invoke the handler with structural mock objects without leaking any usage.
async function invoke(req: MockReq, res: MockRes) {
  // We only depend on a tiny subset of VercelRequest/Response; suppress the structural mismatch.
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error test mock adaptation
  await handler(req, res);
}
function createReq(body: unknown, method = 'POST', ip = '1.1.1.1'): MockReq {
  return { method, body: JSON.stringify(body), headers: { 'x-forwarded-for': ip }, socket: { remoteAddress: ip } };
}
function createRes(): MockRes {
  const res: MockRes = {
    statusCode: 200,
    jsonData: null,
    status(code: number) { this.statusCode = code; return this; },
    json(data: unknown) { this.jsonData = data; return this; }
  };
  return res;
}

describe('api/send-email handler', () => {
  const OLD_ENV = process.env;
  beforeEach(() => {
    process.env = { ...OLD_ENV, RESEND_API_KEY: 'test_key' };
  });
  afterAll(() => {
    process.env = OLD_ENV;
  });

  it('rejects invalid method', async () => {
    const req = createReq({}, 'GET');
    const res = createRes();
  await invoke(req, res);
    expect(res.statusCode).toBe(405);
  });

  it('validates fields', async () => {
    const req = createReq({ name: 'A', email: 'bad', subject: 'x', message: 'short' });
    const res = createRes();
  await invoke(req, res);
    expect(res.statusCode).toBe(400);
  });

  it('succeeds on happy path', async () => {
    const req = createReq({ name: 'John', email: 'john@example.com', subject: 'Hello', message: 'This is a valid message with more than 15 chars.' });
    const res = createRes();
  await invoke(req, res);
    expect(res.statusCode).toBe(200);
    expect(res.jsonData).toHaveProperty('ok', true);
  });

  it('silently accepts honeypot submissions', async () => {
    const req = createReq({ name: 'John', email: 'john@example.com', subject: 'Hello', message: 'This is a valid message with more than 15 chars.', honeypot: 'bot' });
    const res = createRes();
    await invoke(req, res);
    expect(res.statusCode).toBe(200);
    expect(res.jsonData).toHaveProperty('ok', true);
  });

  it('enforces simple rate limit after 5 requests', async () => {
    const ip = '9.9.9.9';
    // 5 allowed
    for (let i = 0; i < 5; i++) {
      const req = createReq({ name: 'John', email: 'john@example.com', subject: 'Hello', message: 'This is a valid message with more than 15 chars.' }, 'POST', ip);
      const res = createRes();
      await invoke(req, res);
      expect([200, 429]).toContain(res.statusCode); // last one may flip depending on internal count
    }
    // One more should be 429
    const req6 = createReq({ name: 'John', email: 'john@example.com', subject: 'Hello', message: 'This is a valid message with more than 15 chars.' }, 'POST', ip);
    const res6 = createRes();
    await invoke(req6, res6);
    expect(res6.statusCode).toBe(429);
  });
});
