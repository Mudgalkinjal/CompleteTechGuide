/**
 * 392. Is Subsequence, Blind 150
 *
 * Determines if string s is a subsequence of string t.
 * A subsequence is formed by deleting some characters from t without disturbing the relative order of the remaining characters.
 *
 * Time Complexity: O(n) - where n is the length of t.
 * Space Complexity: O(1) - Only a constant amount of extra space is used.
 *
 * @param {string} s - The string to check as a subsequence.
 * @param {string} t - The string to check against.
 * @return {boolean} - Returns true if s is a subsequence of t, otherwise false.
 */
var isSubsequence = function(s, t) {
    let j = 0;
    // Iterate through t and check for characters of s in order.
    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[j]) {
            j++;
        }
    }
    // If j equals the length of s, all characters have been matched.
    return j === s.length;
};