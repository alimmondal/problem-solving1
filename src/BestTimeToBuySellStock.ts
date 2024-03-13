// PW2.01.019
// Best Time to Buy and Sell Stock

export function BestTimeToBuySellStock() {
  const maxProfit = (prices: number[]): number => {
    let minPrice = Infinity;
    let maxProfit = 0;

    prices.forEach((price) => {
      minPrice = Math.min(minPrice, price);
      maxProfit = Math.max(maxProfit, price - minPrice);
    });

    return maxProfit;
  };

  // Example 1
  const prices1: number[] = [7, 1, 5, 3, 6, 4];
  console.log(maxProfit(prices1)); // Output: 5

  // Example 2
  const prices2: number[] = [7, 6, 4, 3, 1];
  console.log(maxProfit(prices2)); // Output: 0
}
