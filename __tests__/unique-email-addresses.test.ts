import { numUniqueEmails } from '../unique-email-addresses';

describe('numUniqueEmails', () => {
  test('test1', () => {
    const data = [
      'test.email+alex@leetcode.com',
      'test.e.mail+bob.cathy@leetcode.com',
      'testemail+david@lee.tcode.com',
    ];
    const expected = 2;

    expect(numUniqueEmails(data)).toEqual(expected);
  });

  test('test2', () => {
    const data = ['a@leetcode.com', 'b@leetcode.com', 'c@leetcode.com'];
    const expected = 3;

    expect(numUniqueEmails(data)).toEqual(expected);
  });
});
