/** Leetcode 01, Blind 150
 * Two Sum Problem
 * Given an array of numbers and a target, this function returns indices of the two numbers that add up to the target.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums - Array of numbers
 * @param {number} target - Target sum
 * @return {number[]} - Indices of the two numbers that add up to target
 */
var twoSum = function(nums, target) {
    // Create a map to store numbers and their indices for quick lookup
    let map = new Map();

    // Loop through each element in the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement of the current number needed to reach the target
        let complement = target - nums[i];

        // If the complement exists in the map, we found the pair
        if (map.has(complement)) {
            return [i, map.get(complement)];
        }
        // Otherwise, add the current number and its index to the map
        map.set(nums[i], i);
    }
};
