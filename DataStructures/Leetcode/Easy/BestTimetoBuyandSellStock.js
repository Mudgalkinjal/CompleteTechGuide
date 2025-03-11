/**
 * 121. Best Time to Buy and Sell Stock, Blind 150
 *
 * Finds the maximum profit that can be achieved from a single buy-sell transaction.
 * It tracks the minimum price encountered and calculates the profit for each price point.
 *
 * Time Complexity: O(n) - The prices array is traversed once.
 * Space Complexity: O(1) - Only a constant amount of extra space is used.
 *
 * @param {number[]} prices - Array of stock prices.
 * @return {number} - The maximum profit. If no profit is possible, returns -1 (or you could choose to return 0).
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let max = -1;
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(prices[i], min);
        max = Math.max(max, prices[i] - min);
    }
    return max;
};