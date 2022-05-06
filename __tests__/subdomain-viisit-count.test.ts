import { subdomainVisits } from '../subdomain-viisit-count';

describe('subdomainVisits', () => {
  test('test1', () => {
    const data = ['9001 discuss.leetcode.com'];
    const expected = [
      '9001 discuss.leetcode.com',
      '9001 leetcode.com',
      '9001 com',
    ];

    expect(subdomainVisits(data)).toEqual(expected);
  });

  test('test2', () => {
    const data = [
      '900 google.mail.com',
      '50 yahoo.com',
      '1 intel.mail.com',
      '5 wiki.org',
    ];
    const expected = [
      '900 google.mail.com',
      '901 mail.com',
      '951 com',
      '50 yahoo.com',
      '1 intel.mail.com',
      '5 wiki.org',
      '5 org',
    ];

    expect(subdomainVisits(data)).toEqual(expected);
  });
});
