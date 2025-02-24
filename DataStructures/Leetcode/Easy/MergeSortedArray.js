/** Leetcode 88, Blind 150
 * Merges two sorted arrays nums1 and nums2 into nums1 as one sorted array.
 * Assumes that nums1 has enough space (size m + n) to hold additional elements from nums2.
 *
 * @param {number[]} nums1 - First sorted array with extra space at the end.
 * @param {number} m - Number of valid elements in nums1.
 * @param {number[]} nums2 - Second sorted array.
 * @param {number} n - Number of elements in nums2.
 * @return {void} Do not return anything; modify nums1 in-place.
 */
var merge = function(nums1, m, nums2, n) {
    // mn: pointer for the last index of the merged array in nums1.
    // i: pointer for the last valid element in nums1.
    // j: pointer for the last element in nums2.
    let mn = m + n - 1;
    let i = m - 1;
    let j = n - 1;

    // Merge the arrays from the end to the beginning.
    // This prevents overwriting elements in nums1 that haven't been compared yet.
    while (i >= 0 && j >= 0) {
        // Compare current elements from nums1 and nums2.
        if (nums1[i] >= nums2[j]) {
            // Place the larger element at the current end of nums1.
            nums1[mn] = nums1[i];
            i--;  // Move pointer in nums1.
        } else {
            // Place the element from nums2.
            nums1[mn] = nums2[j];
            j--;  // Move pointer in nums2.
        }
        mn--;  // Move merged pointer to the left.
    }

    // If there are any remaining elements in nums2,
    // copy them into nums1. No need to do anything for nums1's remaining elements,
    // because they are already in the correct place.
    while (j >= 0) {
        nums1[mn] = nums2[j];
        mn--;
        j--;
    }
};
