import * as R from 'ramda';

const stringToArray = R.split('');

/* Question 1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
export const countVowels: (s: string) => number = (s: string): number =>
  stringToArray(s.toLowerCase()).filter((c) => vowels.includes(c)).length;

/* Question 2 */
export const isPalindrome: (s: string) => boolean = (s: string): boolean =>
  R.pipe(
    R.toLower,
    R.replace(/[^a-z0-9]/g, ''),
    stringToArray,
    (arr: string[]) => arr.every((c, i) => c === arr[arr.length - 1 - i])
  )(s);

/* Question 3 */
export type WordTree = {
  root: string;
  children: WordTree[];
};

export const treeToSentence: (tree: WordTree) => string = (
  tree: WordTree
): string =>
  [tree.root, ...tree.children.map(treeToSentence)].join(' ');
