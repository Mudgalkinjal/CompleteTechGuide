/**
 * 122. Best Time to Buy and Sell Stock II, Blind 150
 *
 * Calculates the maximum profit from multiple stock transactions.
 * It sums up the differences for every pair of consecutive days where the price increases.
 *
 * Time Complexity: O(n) - The array is traversed once.
 * Space Complexity: O(1) - Only a constant amount of extra space is used.
 *
 * @param {number[]} prices - Array of stock prices.
 * @return {number} - The maximum profit from transactions.
 */
var maxProfit = function(prices) {
    let total = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i - 1] < prices[i]) {
            total += prices[i] - prices[i - 1];
        }
    }
    return total;
};