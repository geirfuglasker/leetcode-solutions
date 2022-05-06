// https://leetcode.com/explore/featured/card/wix-engineering/651/arrays-and-strings/4158/

export const subdomainVisits = (cpdomains: string[]): string[] => {
  const res = cpdomains.reduce((acc, curr) => {
    const [timesStr, domain] = curr.split(' ');
    const [d1, d2, d3] = domain.split('.');
    const times = parseInt(timesStr);

    if (d3) {
      const level1 = domain;
      const level2 = `${d2}.${d3}`;
      const level3 = d3;

      acc[level1] = times + (acc[level1] || 0);
      acc[level2] = times + (acc[level2] || 0);
      acc[level3] = times + (acc[level3] || 0);
    }

    if (!d3) {
      const level2 = `${d1}.${d2}`;
      const level3 = d2;

      acc[level2] = times + (acc[level2] || 0);
      acc[level3] = times + (acc[level3] || 0);
    }

    return acc;
  }, {});

  const formattedRes = Object.keys(res).reduce((acc, curr) => {
    acc.push(`${res[curr]} ${curr}`);
    return acc;
  }, []);

  return formattedRes;
};
