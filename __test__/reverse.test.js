import reverse from '../src/reverse.js';

test("reverse's main flow", () => {
  expect(reverse('Qw erty')).toBe('ytre wQ');
  expect(reverse('  q1 ')).toBe(' 1q  ');
});

test("reverse's empty string", () => {
  expect(reverse('')).toBe('');
});