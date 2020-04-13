const maxProfit = require('./bestTimeToBuyAndSellStockII');

describe('Best Time to Buy and Sell Stocks II', () => {
  test('it should find the max profit, without engaging in multiple transaction at the same time ', () => {
    const shares = [7,1,5,3,6,4];
    expect(maxProfit(shares)).toBe(7);
  });

  test('it should find the max profit, without engaging in multiple transaction at the same time ', () => {
    const shares = [1,2,3,4,5];
    expect(maxProfit(shares)).toBe(4);
  });

  test('it should find the max profit, without engaging in multiple transaction at the same time ', () => {
    const shares = [7,6,4,3,1];
    expect(maxProfit(shares)).toBe(0);
  });
});
