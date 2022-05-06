// https://leetcode.com/explore/featured/card/wix-engineering/651/arrays-and-strings/4157/

const alphabet = [
  '.-',
  '-...',
  '-.-.',
  '-..',
  '.',
  '..-.',
  '--.',
  '....',
  '..',
  '.---',
  '-.-',
  '.-..',
  '--',
  '-.',
  '---',
  '.--.',
  '--.-',
  '.-.',
  '...',
  '-',
  '..-',
  '...-',
  '.--',
  '-..-',
  '-.--',
  '--..',
];

export const uniqueMorseRepresentations = (words: string[]) => {
  const wordsMorse = words.reduce((acc, curr) => {
    const wordMorse = curr
      .split('')
      .map((character) => {
        const characterdIndex = character.charCodeAt(0) - 97;

        return alphabet[characterdIndex];
      })
      .join('');

    if (acc.indexOf(wordMorse) === -1) {
      acc.push(wordMorse);
    }

    return acc;
  }, []);

  return wordsMorse.length;
};
