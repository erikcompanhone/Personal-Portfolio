// Mock resend before importing handler
jest.mock('resend', () => {
  return { Resend: jest.fn().mockImplementation(() => ({ emails: { send: jest.fn().mockResolvedValue({ data: { id: 'mock' }, error: null }) } })) };
});

import handler from '../../api/send-email';

// Minimal mocks for VercelRequest/Response
function createReq(body: any, method = 'POST', ip = '1.1.1.1') {
  return {
    method,
    body: JSON.stringify(body),
    headers: { 'x-forwarded-for': ip },
    socket: { remoteAddress: ip }
  } as any;
}

function createRes() {
  const res: any = {};
  res.statusCode = 200;
  res.status = (code: number) => { res.statusCode = code; return res; };
  res.jsonData = null;
  res.json = (data: any) => { res.jsonData = data; return res; };
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
    await handler(req, res);
    expect(res.statusCode).toBe(405);
  });

  it('validates fields', async () => {
    const req = createReq({ name: 'A', email: 'bad', subject: 'x', message: 'short' });
    const res = createRes();
    await handler(req, res);
    expect(res.statusCode).toBe(400);
  });

  it('succeeds on happy path', async () => {
    const req = createReq({ name: 'John', email: 'john@example.com', subject: 'Hello', message: 'This is a valid message with more than 15 chars.' });
    const res = createRes();
    await handler(req, res);
    expect(res.statusCode).toBe(200);
    expect(res.jsonData).toHaveProperty('ok', true);
  });
});
