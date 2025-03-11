/**
 * Returns an array such that each element at index i is the product
 * of all elements in the input array except nums[i].
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) (ignoring the output array)
 *
 * @param {number[]} nums - The input array.
 * @return {number[]} - The product array.
 */
var productExceptSelf = function(nums) {
    let pref = 1;       // Holds the product of all elements to the left.
    let post = 1;       // Holds the product of all elements to the right.
    let arr = [];       // Output array.

    // First loop: Compute the prefix product for each index.
    for (let i = 0; i < nums.length; i++) {
        arr[i] = pref;          // Store the product of all numbers to the left of i.
        pref = pref * nums[i];    // Update prefix product to include nums[i].
    }

    // Second loop: Compute the postfix product and multiply with the prefix product.
    // This loop goes from rightmost index to leftmost index.
    for (let i = nums.length - 1; i >= 0; i--) {
        arr[i] = arr[i] * post; // Multiply current prefix product with the postfix product.
        post = post * nums[i];  // Update postfix product to include nums[i].
    }
    return arr;
};