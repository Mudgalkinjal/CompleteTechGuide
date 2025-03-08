
/**
 * 290. Word Pattern, Blind 150
 *
 * Checks if the string s follows the same pattern as defined in the pattern string.
 * It maps each character in the pattern to a word in s and vice versa.
 *
 * Time Complexity: O(n) - where n is the length of the pattern (or the number of words in s)
 * Space Complexity: O(n) - for the two maps used to store the mappings
 *
 * @param {string} pattern - The pattern string consisting of characters.
 * @param {string} s - The input string containing words separated by spaces.
 * @return {boolean} - Returns true if s follows the pattern, otherwise false.
 */
var wordPattern = function(pattern, s) {
    let arr = s.split(' ');
    
    // If the number of words doesn't match the number of characters in the pattern, return false.
    if(arr.length != pattern.length) {
        return false;
    }
    
    let mapCW = new Map(); // Map from pattern character to word.
    let mapWC = new Map(); // Map from word to pattern character.
    
    // Iterate through each character and corresponding word.
    for(let i = 0; i < pattern.length; i++) {
        let char = pattern[i];
        let wrd = arr[i];
        
        // Check mapping from pattern character to word.
        if(mapCW.has(char)) {
            if(mapCW.get(char) !== wrd) return false;
        } else {
            mapCW.set(char, wrd);
        }
        
        // Check mapping from word to pattern character.
        if(mapWC.has(wrd)) {
            if(mapWC.get(wrd) !== char) return false;
        } else {
            mapWC.set(wrd, char);
        }
    }
    
    return true;
};
