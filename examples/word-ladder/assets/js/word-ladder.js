/** 
Author : Build Rise Shine 

Created : 2023 

Script : Word Ladder

Description : Write an algorithm for word ladder for given start and end words.

    - A transformation sequence from word beginWord to word endWord using a dictionary wordList is a 
    sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:
    
    - Every adjacent pair of words differs by a single letter.

    - Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
    
    - sk == endWord

    - Given two words, beginWord and endWord, and a dictionary wordList, return the number of words 
    in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

(c) Copyright by BRS Studio. 
**/

/** 
 Constraints for the algorithm
  -  1 <= beginWord.length <= 10
  -  endWord.length == beginWord.length
  -  1 <= wordList.length <= 5000
  -  wordList[i].length == beginWord.length
  -  beginWord, endWord, and wordList[i] consist of lowercase English letters.
  -  beginWord != endWord
  -  All the words in wordList are unique.
**/

// Algorithm
let wordLadder = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  let queue = [beginWord];
  let steps = 1;

  while (queue.length) {
    const next = [];

    // loop over each word in the queue
    for (let word of queue) {
      if (word === endWord) return steps;

      // loop over each char of the word
      for (let i = 0; i < word.length; i++) {
        // and replace the char with letters from [a - z]
        for (let j = 0; j < 26; j++) {
          const newWord =
            word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i + 1);

          // if the new word exist in the word list add it to the queue
          if (wordSet.has(newWord)) {
            next.push(newWord);
            wordSet.delete(newWord);
          }
        }
      }
    }
    queue = next;
    steps++;
    console.log(wordSet);
  }
  return 0;
};

// Implementation
// example "hit" -> "hot" -> "dot" -> "dog" -> cog" 
const wordList = wordLadder("hit", "cog", [
  "hot",
  "dot",
  "dog",
  "lot",
  "log",
  "cog",
]);
console.log("Number of words in the shortest transformation sequence for given beginWord to endWord is");
console.log(wordList);

// BIG O Notation
// Time complexity - O(M * N^2) - where M is length of the words in the list & N is number of words in the word list
// Space complexity - O(L * N)
