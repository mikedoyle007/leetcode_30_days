/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  stones = stones.sort((a, b) => a - b);

  while (stones.length > 1) {
    let y = stones.pop();
    let x = stones.pop();

    if (x < y) {
      let stone = y - x;
      stones.push(stone);
      stones.sort((a, b) => a - b);
    }
  }

  if (stones.length === 1) {
    return stones[0];
  } else {
    return 0;
  }
};
