
/**
 * 88. Merge Sorted Array, Blind 150
 *
 * Merges two sorted arrays in-place.
 * The merged result is stored in nums1.
 *
 * Time Complexity: O(m + n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums1 - First sorted array with extra space at the end.
 * @param {number} m - Number of valid elements in nums1.
 * @param {number[]} nums2 - Second sorted array.
 * @param {number} n - Number of elements in nums2.
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // Pointer for the last index of the merged array.
    let mn = m + n - 1;
    // Pointer for the last valid element in nums1.
    let i = m - 1;
    // Pointer for the last element in nums2.
    let j = n - 1;

    // Merge the arrays from the end until one of them is exhausted.
    while (i >= 0 && j >= 0) {
        // Compare elements from the end of nums1 and nums2.
        if (nums1[i] >= nums2[j]) {
            // If the element in nums1 is larger, place it at the current merge position.
            nums1[mn] = nums1[i];
            i--;
        } else {
            // Otherwise, place the element from nums2.
            nums1[mn] = nums2[j];
            j--;
        }
        mn--;
    }

    // If there are remaining elements in nums2, copy them.
    while (j >= 0) {
        nums1[mn] = nums2[j];
        j--;
        mn--;
    }
};
