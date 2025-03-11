/**
 * 55. Jump Game, Blind 150
 *
 * Determines if you can reach the last index of the array.
 * It iterates through the array, updating the maximum reachable index.
 * If at any point the current index exceeds the maximum reachable index, the function returns false.
 *
 * Time Complexity: O(n) - The array is traversed once.
 * Space Complexity: O(1) - Only constant extra space is used.
 *
 * @param {number[]} nums - Array where each element represents the maximum jump length from that position.
 * @return {boolean} - Returns true if the last index can be reached, otherwise false.
 */
var canJump = function(nums) {
    let maxReach = 0;
    let goal = nums.length - 1;
    
    // Iterate through each position in the array.
    for (let i = 0; i < nums.length; i++) {
        // If the current index is beyond the maximum reachable index, it's not possible to proceed.
        if (i > maxReach) return false;
        
        // Update the maximum reachable index.
        maxReach = Math.max(maxReach, i + nums[i]);
        
        // If the goal is within reach, return true.
        if (maxReach >= goal) return true;
    }
    
    return true;
};