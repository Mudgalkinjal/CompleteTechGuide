/**
 * 169. Majority Element, Blind 150
 *
 * Finds the majority element in an array.
 * The majority element is defined as the element that appears more than ⌊ n/2 ⌋ times.
 *
 * Time Complexity: O(n) - Each element is processed exactly once.
 * Space Complexity: O(n) - In the worst-case scenario, all elements are stored in the hash map.
 *
 * @param {number[]} nums - The array of numbers.
 * @return {number} - The majority element.
 */
var majorityElement = function(nums) {
    if (nums.length === 1) return nums[0];
    
    let len = nums.length;
    let mid = Math.floor(len / 2);
    let map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let count = map.get(nums[i]);
            // Increment count and check if it exceeds the majority threshold.
            if (count >= mid) return nums[i];
            map.set(nums[i], count + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
};