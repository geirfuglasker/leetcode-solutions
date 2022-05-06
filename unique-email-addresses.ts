// https://leetcode.com/explore/featured/card/wix-engineering/651/arrays-and-strings/4154/

export const numUniqueEmails = (emails: string[]) => {
  return emails.reduce((acc, curr, key) => {
    let [localName, domainName] = curr.split('@');
    localName = localName.replace(/\./g, '');
    const indexOfPlus = localName.indexOf('+');

    if (indexOfPlus !== -1) {
      localName = localName.substring(0, indexOfPlus);
    }

    const formattedEmail = `${localName}@${domainName}`;

    if (acc.indexOf(formattedEmail) === -1) {
      acc.push(formattedEmail);
    }

    return acc;
  }, []).length;
};
