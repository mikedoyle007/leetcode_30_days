/**
 * @param {character[][]} grid
 * @return {number}
 */

var dfs = function(grid, i, j) {

  const m = grid.length;
  const n = grid[0].length;

  if (i>=0 && i<m && j>=0 && j<n && grid[i][j] == '1') {
    grid[i][j] = '0';

    dfs(grid, i+1, j);
    dfs(grid, i-1, j);
    dfs(grid, i, j+1);
    dfs(grid, i, j-1);
  }
}

var numIslands = function(grid) {

  let islands = 0;

  if (grid === null || grid.length == 0) {
    return 0;
  }

  for (let i=0; i < grid.length; i++) {
    for (let j=0; j < grid[0].length; j++) {
      const char = grid[i][j];

      if (char == '1') {
        dfs(grid, i, j);
        islands += 1;
      }
    }
  }

  return islands;
};
