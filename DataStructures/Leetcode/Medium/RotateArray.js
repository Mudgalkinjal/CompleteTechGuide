/**
 * 189. Rotate Array, Blind 150
 *
 * Rotates the given array to the right by k steps, modifying it in-place.
 * The approach is based on reversing parts of the array:
 *   1. Reverse the entire array.
 *   2. Reverse the first k elements.
 *   3. Reverse the rest of the array.
 *
 * Time Complexity: O(n) - The array is processed in three passes.
 * Space Complexity: O(1) - Only a few variables are used.
 *
 * @param {number[]} nums - The array of numbers to rotate.
 * @param {number} k - The number of steps to rotate the array.
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // If k equals the length of the array, no rotation is needed.
    if (k == nums.length) return;
    
    // If k is greater than the array length, reduce it to a valid rotation.
    if (k > nums.length) {
        k = k % nums.length;
    }
    
    // Helper function to reverse elements in the array between indices left and right.
    function reverse(arr, left, right) {
        while (left < right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    
    // Reverse the entire array.
    reverse(nums, 0, nums.length - 1);
    
    // Reverse the first k elements.
    reverse(nums, 0, k - 1);
    
    // Reverse the remaining elements.
    reverse(nums, k, nums.length - 1);
};