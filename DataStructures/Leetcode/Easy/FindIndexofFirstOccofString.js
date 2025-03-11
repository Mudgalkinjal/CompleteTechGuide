
/**
 * 28. Implement strStr, Blind 150
 *
 * Returns the index of the first occurrence of needle in haystack,
 * or -1 if needle is not found.
 *
 * Time Complexity: O(n * m) in the worst case, where n is the length of haystack and m is the length of needle.
 * Space Complexity: O(m) due to the recursion call stack.
 *
 * @param {string} haystack - The string to search within.
 * @param {string} needle - The substring to search for.
 * @return {number} - The index of the first occurrence of needle, or -1 if not found.
 */
var strStr = function(haystack, needle) {
    let len = haystack.length;
    // If needle is longer than haystack, it cannot be found.
    if (needle.length > len) return -1;
    
    // Common edge case: if needle is an empty string, return 0.
    if (needle === "") return 0;
    
    let res = false;
    for (let right = 0; right < len; right++) {
        if (haystack[right] == needle[0]) {
            // Debug logs (optional)
            console.log(right);
            res = compareWrds(right, 0, haystack, needle);
            console.log(res);
            if (res === true) return right;
        }
    }
    return -1;
};

/**
 * Recursive helper function to compare characters of haystack and needle.
 *
 * @param {number} i - Current index in haystack.
 * @param {number} j - Current index in needle.
 * @param {string} hay - The haystack string.
 * @param {string} need - The needle string.
 * @return {boolean} - Returns true if the substring of haystack starting at index i matches needle.
 */
function compareWrds(i, j, hay, need) {
    // If we've compared all characters in needle, then needle is fully matched.
    if (j === need.length) {
        return true;
    }
    // If we run out of characters in haystack or the characters don't match, return false.
    if (i >= hay.length || hay[i] !== need[j]) {
        return false;
    }
    // Recursively compare the next characters.
    return compareWrds(i + 1, j + 1, hay, need);
}
