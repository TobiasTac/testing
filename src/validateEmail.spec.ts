import { expect, it } from "vitest";
import { validateEmail } from "./validateEmail";

it.each([
  '',
  'invalid',
  'invalid@mail',
  'invalid#@email.com',
])('should return false for invalid email: $0', (email) => {
  const isValid = validateEmail(email)

  expect(isValid).toBe(false);
});

it.each([
  'tobias@gmail.com',
  'tobias.vida@gmail.com',
  'tobias+admin@gmail.com',
])('should return true for valid email: $0', (email) => {
  const isValid = validateEmail(email)

  expect(isValid).toBe(true);
});

it.each([
  { email: 'tobias+obj@gmail.com' },
])('should return true for valid email: $email', ({ email }) => {
  const isValid = validateEmail(email)

  expect(isValid).toBe(true);
});

it.each([
  { email: { address: 'tobias+obj-aninhado@gmail.com' } },
])('should return true for valid email: $email.address', ({ email }) => {
  const isValid = validateEmail(email.address)

  expect(isValid).toBe(true);
});