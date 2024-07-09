// 121. Best Time to Buy and Sell Stock

var maxProfit = function (prices) {
  let maxPro = 0;

  let prev = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const curr = prices[i];

    if (prev > curr) {
      prev = curr;
    } else {
      maxPro = Math.max(maxPro, curr - prev);
    }
  }

  return maxPro;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
