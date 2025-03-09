
/**
 * 13. Roman to Integer, Blind 150
 *
 * Converts a Roman numeral string into its integer representation.
 *
 * Time Complexity: O(n) - where n is the length of the string.
 * Space Complexity: O(1) - constant space for the mapping and variables.
 *
 * @param {string} s - The Roman numeral string.
 * @return {number} - The integer representation of the Roman numeral.
 */
var romanToInt = function(s) {
    // Mapping of Roman numeral characters to their integer values.
    let map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let sum = 0;
    
    // Iterate through each character in the Roman numeral string.
    for (let i = 0; i < s.length; i++) {
        // If the current value is less than the next one, subtract it.
        if (map[s[i]] < map[s[i + 1]]) {
            sum -= map[s[i]];
        } else {
            // Otherwise, add the current value.
            sum += map[s[i]];
        }
    }
    
    return sum;
};
