/**
 * Leetcode 27, Blind 150
 * 
 * Removes all occurrences of a specified value from the array in-place.
 * Returns the new length of the array after removals.
 *
 * @param {number[]} nums - The input array.
 * @param {number} val - The value to remove.
 * @return {number} The new length of the array.
 */
var removeElement = function(nums, val) {
    let i = 0; // Slow pointer: marks the position for the next non-val element.
    
    // Fast pointer: iterate through each element in the array.
    for (let j = 0; j < nums.length; j++) {
        // If the current element is not equal to 'val', copy it to the position indicated by 'i'.
        if (nums[j] != val) {
            nums[i] = nums[j];
            i++; // Increment the slow pointer.
        }
    }
    
    // 'i' now represents the new length of the array with all non-'val' elements at the beginning.
    return i;
}; 
