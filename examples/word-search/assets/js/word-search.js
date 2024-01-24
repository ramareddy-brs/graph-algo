/** 
 Author : Build Rise Shine 

Created : 2023 

Script : Word search

Description : Write an algorithm to find if the given word exists or not in the given board

    Given an m x n grid of characters board and a string word, return true if word exists in the grid.

    The word can be constructed from letters of sequentially adjacent cells, where adjacent cells 
    are horizontally or vertically neighboring. The same letter cell may not be used more than once.

(c) Copyright by BRS Studio. 
**/

// Algorithm
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
let checkExisting = function (board, word) {
  let result = false;
  var check = function (r, c, i) {
    if (!result) {
      if (r < 0 || c < 0 || r >= board.length || c >= board[0].length) return; // out of boundary
      if (board[r][c] != word[i]) return; // wrong character
      if (i == word.length - 1) {
        // got to the end means we found a correct path
        result = true;
        return;
      }
      board[r][c] = null; // mark our path so we dont go back and forth
      // try all directions
      check(r + 1, c, i + 1);
      check(r - 1, c, i + 1);
      check(r, c + 1, i + 1);
      check(r, c - 1, i + 1);
      board[r][c] = word[i]; // reset our board , very important
    }
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == word[0]) {
        check(i, j, 0);
        if (result) return result;
      }
    }
  }

  return result;
};

// Implementation
const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
const word = "ABCCED";
const results = checkExisting(board, word);
if (results) {
  console.log(`The given word ${word} exists in the board`);
}else{
    console.log(`The given word ${word} does not exists in the board`);
}

// BIG O Notation
// Time complexity - O(N * M * 4^L) - where 'N' and 'M' are dimension of board and 'L' is length of the word
// Space complexity - O(L) - where 'L' is length of the word