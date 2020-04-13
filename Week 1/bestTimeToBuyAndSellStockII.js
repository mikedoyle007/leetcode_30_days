/**
 * find difference of arr[i+1] - arr[i]
 * if diff > 0 => sum += diff
 * return sum
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let sum = 0;
  let diff = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i+1]) {
      diff = prices[i+1] - prices[i];
      if (diff > 0) {
        sum += diff;
      }
    }
  }

  return sum;
};

// var maxProfit = function(prices) {
//   let bestWithoutStock = 0;
//   // let bestWithoutStock = -Infinity;
//   let bestWithStock = -Infinity;
//   // let bestWithStock = 0;

//   for (let price of prices) {
//     bestWithStock = Math.max(bestWithStock, bestWithoutStock - price);  // money before you buy - price of stock => bestWithStock
//     bestWithoutStock = Math.max(bestWithoutStock, bestWithStock + price); // money before you sell + sale price of stock => bestWithoutStock
//   }

//   return bestWithoutStock;  // because at the end you have to sell your stock
// }

module.exports = maxProfit;
