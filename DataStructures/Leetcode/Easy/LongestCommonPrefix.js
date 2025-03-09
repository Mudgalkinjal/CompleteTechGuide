/**
 * 14. Longest Common Prefix, Blind 150
 *
 * Finds the longest common prefix string among an array of strings.
 * Returns an empty string if there is no common prefix.
 *
 * Time Complexity: O(S) - where S is the total number of characters in all strings.
 * Space Complexity: O(1) - constant extra space is used.
 *
 * @param {string[]} strs - Array of strings.
 * @return {string} - The longest common prefix.
 */
var longestCommonPrefix = function(strs) {
    let first = strs[0];
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < first.length; j++) {
            if (first[j] != strs[i][j]) {
                first = first.slice(0, j);
                break;
            }
        }
        if (first === '') return '';
    }
    return first;
};