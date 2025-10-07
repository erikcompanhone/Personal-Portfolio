import '@testing-library/jest-dom';

// Mock scrollTo to avoid jsdom errors
window.scrollTo = window.scrollTo || (() => {});

// Polyfill TextEncoder/TextDecoder for libs (resend) that expect them in Node env
import { TextEncoder, TextDecoder } from 'util';
// @ts-ignore
if (!global.TextEncoder) global.TextEncoder = TextEncoder;
// @ts-ignore
if (!global.TextDecoder) global.TextDecoder = TextDecoder as any;

// Optional: silence React Router warnings for missing act in some transition cases
const originalError = console.error;
console.error = (...args: any[]) => {
  if (typeof args[0] === 'string' && /Warning:.*not wrapped in act/.test(args[0])) {
    return;
  }
  originalError(...args);
};
