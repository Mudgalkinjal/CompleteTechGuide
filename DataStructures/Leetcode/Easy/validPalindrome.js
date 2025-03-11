/**
 * 125. Valid Palindrome, Blind 150
 *
 * Checks if a string is a valid palindrome, ignoring non-alphanumeric characters and case.
 * The function cleans the string, reverses it, and then compares the cleaned version with its reverse.
 *
 * Time Complexity: O(n) - where n is the length of the cleaned string.
 * Space Complexity: O(n) - extra space is used for the cleaned string and its reverse.
 *
 * @param {string} s - The input string.
 * @return {boolean} - Returns true if s is a valid palindrome, otherwise false.
 */
var isPalindrome = function(s) {
    // Remove all non-alphanumeric characters and convert to lowercase.
    let t = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Reverse the cleaned string.
    let r = t.split('').reverse().join('');
    // Compare the cleaned string with its reversed version.
    return t == r;
};