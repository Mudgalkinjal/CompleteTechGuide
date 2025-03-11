/**
 * 167. Two Sum II - Input Array Is Sorted, Blind 150
 *
 * Finds two numbers in a sorted array that sum to a given target.
 * Uses a two-pointer approach to efficiently locate the pair.
 *
 * Time Complexity: O(n) - The array is traversed at most once.
 * Space Complexity: O(1) - Only constant extra space is used.
 *
 * @param {number[]} numbers - A sorted array of numbers.
 * @param {number} target - The target sum.
 * @return {number[]} - The 1-indexed positions of the two numbers that add up to the target.
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    
    // Move pointers inward until the target sum is found.
    while (left < right) {
        let sum = numbers[left] + numbers[right];
        if (sum > target) {
            right--;
        } else if (sum < target) {
            left++;
        } else {
            // Return 1-indexed positions.
            return [left + 1, right + 1];
        }
    }
};