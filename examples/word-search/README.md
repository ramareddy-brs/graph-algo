## Word Search

The checkExisting algorithm is used to determine if a given word exists in the board. It performs a depth-first search (DFS) by exploring all possible paths starting from each cell on the board. It checks if the current character in the board matches the corresponding character in the word.

If a path leads to the end of the word, it marks the result as true. The algorithm continues the search in all four directions (up, down, left, and right) until it finds the complete word or exhausts all possibilities. It returns true if the word exists, and false otherwise.