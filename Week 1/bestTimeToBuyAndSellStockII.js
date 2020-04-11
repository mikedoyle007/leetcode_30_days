console.log(Math.abs(7, 1))

console.log(1 - 7)
console.log(5 - 1)
console.log(3-5)
console.log(6-3)
console.log(4-6)

/**
 * find difference of arr[i+1] - arr[i]
 * if diff > 0 => sum += diff
 * return sum
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//   let sum = 0;
//   let diff = 0;

//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i+1]) {
//       diff = prices[i+1] - prices[i];
//       if (diff > 0) {
//         sum += diff;
//       }
//     }
//   }

//   return sum;
// };

var maxProfit = function(prices) {
  let bestWithoutStock = 0;
  // let bestWithoutStock = -Infinity;
  let bestWithStock = -Infinity;
  // let bestWithStock = 0;

  for (let price of prices) {
    console.log(bestWithStock);
    console.log(bestWithoutStock);
    console.log(price);
    bestWithStock = Math.max(bestWithStock, bestWithoutStock - price);  // money before you buy - price of stock => bestWithStock
    bestWithoutStock = Math.max(bestWithoutStock, bestWithStock + price); // money before you sell + sale price of stock => bestWithoutStock
    console.log(`with: ${bestWithStock}, out: ${bestWithoutStock}, price: ${price}`)
  }

  return bestWithoutStock;  // because at the end you have to sell your stock
}

const p1 = [7,1,5,3,6,4];
// const p2 = [1,2,3,4,5];
// const p3 = [7,6,4,3,1];

console.log(maxProfit(p1)); // 7
console.log(maxProfit(p2)); // 4
console.log(maxProfit(p3)); // 0
