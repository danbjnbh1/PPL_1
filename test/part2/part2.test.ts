import {
  countVowels,
  isPalindrome,
  treeToSentence,
  WordTree,
} from '../../src/part2/part2';

describe.only('Assignment 1 - Part 2', () => {
  describe('countVowels', () => {
    it('should count vowels in a simple word', () => {
      expect(countVowels('hello')).toBe(2);
    });

    it('should count vowels in uppercase and lowercase', () => {
      expect(countVowels('HELLO')).toBe(2);
    });

    it('should count vowels in a mixed case string', () => {
      countVowels('This is SOME Text');
    });
  });

  describe('isPalindrome', () => {
    it('should return true for a simple palindrome', () => {
      expect(isPalindrome('racecar')).toBe(true);
    });

    it('should return true for a palindrome with mixed case', () => {
      expect(isPalindrome('RaceCar')).toBe(true);
    });

    it('should return false for a non-palindrome', () => {
      expect(isPalindrome('Not a palindrome')).toBe(false);
    });
    it('should return true for a palindrome with spaces and punctuation', () => {
      expect(isPalindrome('A man, a plan, a canal, Panama!')).toBe(true);
    });
  });

  describe('treeToSentence', () => {
    it('should concatenate words in pre-order traversal', () => {
      const tree: WordTree = {
        root: 'Hello',
        children: [
          { root: 'from', children: [] },
          { root: 'PPL', children: [] },
          { root: 'team!', children: [] },
        ],
      };

      expect(treeToSentence(tree)).toBe('Hello from PPL team!');
    });

    it('should handle deeper nesting', () => {
      const tree: WordTree = {
        root: 'Hello',
        children: [
          {
            root: 'students',
            children: [{ root: 'how', children: [] }],
          },
          { root: 'are', children: [] },
          { root: 'you?', children: [] },
        ],
      };

      expect(treeToSentence(tree)).toBe('Hello students how are you?');
    });

    // Your tests here (optional)
  });
});
