/**
 * Leetcode 80, Blind 150
 *
 * Removes duplicates from a sorted array in-place such that each element appears at most twice.
 * The relative order of the elements is maintained.
 * Returns the new length of the array after extra duplicates are removed.
 *
 * @param {number[]} nums - The sorted input array.
 * @return {number} The new length of the array.
 */
var removeDuplicates = function(nums) {
    // 'count' tracks the number of consecutive duplicates encountered.
    // It starts at 0 because the first element doesn't count as a duplicate.
    let count = 0;
    // 'slow' pointer indicates the next index to place a valid element.
    // Since the first element is always allowed, we start from index 1.
    let slow = 1;
    
    // Iterate through the array starting from index 1 with the 'fast' pointer.
    for (let fast = 1; fast < nums.length; fast++) {
        // If the current element is the same as the previous one,
        // increment the duplicate counter.
        if (nums[fast] === nums[fast - 1]) {
            count++;
        } else {
            // Reset the counter when a new element is encountered.
            count = 0;
        }
        // Allow the element if it is not the third (or more) duplicate.
        if (count <= 1) {
            // Place the valid element at the slow pointer's position.
            nums[slow] = nums[fast];
            // Move the slow pointer forward.
            slow++;
        }
    }
    
    // Adjust the length of the array to contain only the allowed elements.
    nums.length = slow;
    
    // Return the new length.
    return slow;
};
