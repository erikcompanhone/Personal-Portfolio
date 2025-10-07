import '@testing-library/jest-dom';

// Mock scrollTo to avoid jsdom errors
if (!window.scrollTo) {
  // Provide a no-op implementation; returning void explicitly satisfies lint
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  window.scrollTo = () => {};
}

// Polyfill TextEncoder/TextDecoder for libs (resend) that expect them in Node env
import { TextEncoder, TextDecoder } from 'util';
declare global {
  // eslint-disable-next-line no-var
  var TextEncoder: typeof TextEncoder;
  // eslint-disable-next-line no-var
  var TextDecoder: typeof TextDecoder;
}
// Only assign if truly missing (use in operator instead of typeof for accuracy)
if (!('TextEncoder' in global)) {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  (global as unknown as { TextEncoder: typeof TextEncoder }).TextEncoder = TextEncoder;
}
if (!('TextDecoder' in global)) {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  (global as unknown as { TextDecoder: typeof TextDecoder }).TextDecoder = TextDecoder;
}

// Optional: silence React Router act warning noise while keeping genuine errors
const originalError = console.error.bind(console);
console.error = (...args: Parameters<typeof console.error>): ReturnType<typeof console.error> => {
  const [first, ...rest] = args;
  if (typeof first === 'string' && /Warning:.*not wrapped in act/.test(first)) {
    return undefined as unknown as ReturnType<typeof console.error>;
  }
  return originalError(first, ...rest);
};
