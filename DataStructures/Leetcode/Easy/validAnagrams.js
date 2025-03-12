/**
 * 242. Valid Anagram, Blind 150
 *
 * Checks if two strings s and t are anagrams.
 * It uses a Map to count character frequencies in s, then decreases the counts for characters in t.
 * The strings are anagrams if all counts are zero after processing.
 *
 * Time Complexity: O(n) - where n is the length of the strings.
 * Space Complexity: O(1) - in the worst-case scenario, the map holds a fixed number of characters (depending on the character set).
 *
 * @param {string} s - The first string.
 * @param {string} t - The second string.
 * @return {boolean} - Returns true if s and t are anagrams, otherwise false.
 */
var isAnagram = function(s, t) {
    let map1 = new Map();
    
    // Count frequency of each character in s.
    for (let elem of s) {
        if (map1.has(elem)) 
            map1.set(elem, map1.get(elem) + 1);
        else 
            map1.set(elem, 1);
    }
    
    // Decrease frequency for each character in t.
    for (let elem of t) {
        if (map1.has(elem)) 
            map1.set(elem, map1.get(elem) - 1);
        else 
            return false; // Character in t not found in s.
    }
    
    // Check if all frequencies are zero.
    return [...map1.values()].every(elem => elem === 0);
};