import { uniqueMorseRepresentations } from '../unique-morse-code-words';

describe('uniqueMorseRepresentations', () => {
  test('test1', () => {
    const data = ['gin', 'zen', 'gig', 'msg'];
    const expected = 2;

    expect(uniqueMorseRepresentations(data)).toEqual(expected);
  });

  test('test2', () => {
    const data = ['a'];
    const expected = 1;

    expect(uniqueMorseRepresentations(data)).toEqual(expected);
  });
});
