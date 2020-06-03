import { WhoAmI } from '.';
test('Who am i?', () => {
  expect(WhoAmI('Vinnie')).toBe('Hello Vinnie');
});