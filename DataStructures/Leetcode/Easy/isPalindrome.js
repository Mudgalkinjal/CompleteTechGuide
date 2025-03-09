/**
 * 9. Palindrome Number, Blind 150
 *
 * Checks if a given integer x is a palindrome.
 * A palindrome number reads the same backward as forward.
 *
 * Time Complexity: O(log10(x))
 * Space Complexity: O(1)
 *
 * @param {number} x - The integer to check.
 * @return {boolean} - Returns true if x is a palindrome, otherwise false.
 */
var isPalindrome = function(x) {
    let temp = x;
    
    // Negative numbers are not palindromes.
    if (temp % 10 < 0) return false;
    
    let rev = 0;
    
    // Reverse the number digit by digit.
    while (temp > 0) {
        let last = temp % 10;
        rev = rev * 10 + last;
        temp = Math.floor(temp / 10);
    }
    
    // Check if the reversed number equals the original number.
    return rev == x;
};