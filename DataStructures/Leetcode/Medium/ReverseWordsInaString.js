/**
 * 151. Reverse Words in a String, Blind 150
 *
 * Reverses the order of words in the input string.
 * Trims extra spaces, splits the string by one or more whitespace characters,
 * reverses the resulting array, and joins it back into a single string.
 *
 * Time Complexity: O(n) - Each operation (trim, split, reverse, join) processes the string linearly.
 * Space Complexity: O(n) - Extra space is used for the split array.
 *
 * @param {string} s - The input string.
 * @return {string} - The string with words in reversed order.
 */
var reverseWords = function(s) {
    s = s.trim();
    s = s.split(/\s+/);
    s = s.reverse().join(' ');
    return s;
};