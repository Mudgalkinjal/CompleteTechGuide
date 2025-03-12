/**
 * 322. Coin Change, Blind 150
 *
 * Finds the minimum number of coins required to make up a given amount.
 * Uses dynamic programming to build up a solution for every amount up to the target.
 *
 * Time Complexity: O(amount * coins.length)
 * Space Complexity: O(amount)
 *
 * @param {number[]} coins - The available coin denominations.
 * @param {number} amount - The target amount.
 * @return {number} - The minimum number of coins required, or -1 if it is not possible.
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    
    // Build the dp array from 1 to amount.
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
            }
        }
    }
    
    return dp[amount] > amount ? -1 : dp[amount];
};