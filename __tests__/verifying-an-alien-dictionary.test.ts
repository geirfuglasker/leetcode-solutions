import { isAlienSorted } from '../verifying-an-alien-dictionary';

describe('isAlienSorted', () => {
  test('test1', () => {
    const data = ['hello', 'leetcode'];
    const order = 'hlabcdefgijkmnopqrstuvwxyz';

    expect(isAlienSorted(data, order)).toBeTruthy();
  });

  test('test2', () => {
    const data = ['apple', 'app'];
    const order = 'abcdefghijklmnopqrstuvwxyz';

    expect(isAlienSorted(data, order)).toBeFalsy();
  });
});
