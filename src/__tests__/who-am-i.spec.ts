import { WhoAreU } from '..';

test('Who are u?', () => {
  expect(WhoAreU('Vinnie')).toBe('Hey Vinnie');
});