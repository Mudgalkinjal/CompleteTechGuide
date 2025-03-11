/**
 * 58. Length of Last Word, Blind 150
 *
 * Returns the length of the last word in the string s.
 * The string is trimmed to remove extra spaces, and then iterated from the end until a space is encountered.
 *
 * Time Complexity: O(n) - In the worst case, the algorithm processes every character in the string.
 * Space Complexity: O(1) - Only a constant amount of extra space is used.
 *
 * @param {string} s - The input string.
 * @return {number} - The length of the last word in s.
 */
var lengthOfLastWord = function(s) {
    s = s.trim(); // Remove leading and trailing spaces.
    let count = 0;
    // Iterate backwards through the string.
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == " ") break; // Stop if a space is encountered.
        count++;
    }
    return count;
};