/**
 * 5. Longest Palindromic Substring, Blind 150
 *
 * Finds the longest palindromic substring in the input string s.
 * It expands around each character (and gap between characters) as potential centers.
 *
 * Time Complexity: O(n²) - In the worst-case scenario, expanding around each center can take O(n).
 * Space Complexity: O(1) - Only constant extra space is used.
 *
 * @param {string} s - The input string.
 * @return {string} - The longest palindromic substring.
 */
var longestPalindrome = function(s) {
    if (s.length === 0) return '';

    let left = 0;
    let right = 0;

    // Iterate through each character as a potential center.
    for (let i = 0; i < s.length; i++) {
        // Get palindrome length for odd-length palindromes (single center).
        let odd = isPalindrome(i, i, s);
        // Get palindrome length for even-length palindromes (center between i and i+1).
        let even = isPalindrome(i, i + 1, s);
        let len = Math.max(odd, even);

        // Update the boundaries of the longest palindrome found.
        if (len > right - left) {
            left = i - Math.floor((len - 1) / 2);
            right = i + Math.floor(len / 2);
        }
    }
    return s.substring(left, right + 1);
};

/**
 * Helper function to expand around a center and return the length of the palindrome.
 *
 * @param {number} left - The left index for the center.
 * @param {number} right - The right index for the center.
 * @param {string} str - The input string.
 * @return {number} - The length of the palindrome.
 */
function isPalindrome(left, right, str) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
        left--;
        right++;
    }
    // Return the length of the palindrome.
    return right - left - 1;
}