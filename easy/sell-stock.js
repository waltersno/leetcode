// link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

var maxProfit = function (prices) {
  let stockPrice = prices[0];
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (stockPrice >= prices[i]) {
      stockPrice = prices[i];
    } else if (prices[i] - stockPrice > maxProfit) {
      maxProfit = prices[i] - stockPrice;
    }
  }

  return maxProfit;
};
