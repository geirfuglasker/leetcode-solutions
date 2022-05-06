// https://leetcode.com/explore/featured/card/wix-engineering/651/arrays-and-strings/4156/

export const isAlienSorted = (words: string[], order: string) => {
  const wordsCount = words.length;

  const isSorted = () => {
    for (let wordIndex = 0; wordIndex < wordsCount; wordIndex++) {
      const word = words[wordIndex];
      const nextWord = words[wordIndex + 1];

      if (!nextWord) {
        break;
      }

      const wordCharacterCount = word.length;

      for (
        let wordCharacterIndex = 0;
        wordCharacterIndex < wordCharacterCount;
        wordCharacterIndex++
      ) {
        const wordCharacter = word[wordCharacterIndex];
        const nextWordCharacter = nextWord[wordCharacterIndex];
        const wordCharacterIndexInOrder = order.indexOf(wordCharacter);
        const nextWordCharacterIndexInOrder = order.indexOf(nextWordCharacter);

        if (wordCharacterIndexInOrder < nextWordCharacterIndexInOrder) {
          break;
        }

        if (wordCharacterIndexInOrder > nextWordCharacterIndexInOrder) {
          return false;
        }
      }
    }

    return true;
  };

  return isSorted();
};
