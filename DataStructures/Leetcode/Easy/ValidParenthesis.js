/**
 * 20. Valid Parentheses, Blind 150
 *
 * Checks if a string of parentheses is valid.
 * Uses a stack to store the expected closing brackets.
 *
 * Time Complexity: O(n) - Each character is processed once.
 * Space Complexity: O(n) - In the worst-case, all characters are pushed onto the stack.
 *
 * @param {string} s - The string containing parentheses.
 * @return {boolean} - Returns true if the string is valid, otherwise false.
 */
var isValid = function(s) {
    // If the string has 0 or 1 character, it can't be valid.
    if (s.length <= 1) {
        return false;
    }
    
    let stack = [];
    
    // Process each character in the string.
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '(':
                // For an opening '(', push its matching closing bracket.
                stack.push(')');
                break;
            case '[':
                // For an opening '[', push its matching closing bracket.
                stack.push(']');
                break;
            case '{':
                // For an opening '{', push its matching closing bracket.
                stack.push('}');
                break;
            default:
                // For closing brackets, check if it matches the top of the stack.
                // If not, the string is not valid.
                if (stack.pop() != s[i]) return false;
        }
    }
    
    // The string is valid if no unmatched brackets remain.
    return stack.length == 0;
};