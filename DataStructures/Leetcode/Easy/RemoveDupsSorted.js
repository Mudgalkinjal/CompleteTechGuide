/**
 * Leetcode 26, Blind 150
 * 
 * Removes duplicates from a sorted array in-place.
 * The array is modified so that the first k elements contain the unique elements in their original order.
 * Returns k, the number of unique elements.
 *
 * @param {number[]} nums - The sorted input array.
 * @return {number} The number of unique elements.
 */
var removeDuplicates = function(nums) {
    // Initialize slow pointer to track the index of the last unique element.
    let slow = 0;
    // 'count' keeps track of the number of unique elements.
    // Since the array is non-empty (if empty, the loop won't run), we start with count = 1.
    let count = 1;
    
    // Fast pointer starts from index 1 and goes through each element.
    for (let fast = 1; fast < nums.length; fast++) {
        // When we find a new unique element (different from the element at slow pointer)
        if (nums[slow] !== nums[fast]) {
            // Move slow pointer forward to position the new unique element.
            slow++;
            // Copy the new unique element into the next position.
            nums[slow] = nums[fast];
            // Increase the count of unique elements.
            count++;
        }
    }
    
    // Return the number of unique elements.
    return count;
};
