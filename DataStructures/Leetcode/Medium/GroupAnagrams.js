/**
 * 49. Group Anagrams, Blind 150
 *
 * Groups a list of strings into anagrams.
 * For each string, its characters are sorted to form a key.
 * Strings with the same key are grouped together.
 *
 * Time Complexity: O(n * m log m)
 *   - n: number of strings
 *   - m: average length of a string (due to sorting each string)
 * Space Complexity: O(n * m)
 *   - In the worst case, all strings are unique and stored in the map.
 *
 * @param {string[]} strs - Array of strings.
 * @return {string[][]} - An array of groups of anagrams.
 */
var groupAnagrams = function(strs) {
    let map = new Map();

    for (let i = 0; i < strs.length; i++) {
        // Sort the characters in the string to form the anagram key.
        let ana = strs[i].split('').sort().join('');
        
        // Group the strings by their sorted key.
        if (map.has(ana)) {
            let arr = map.get(ana);
            arr.push(strs[i]);
            map.set(ana, arr);
        } else {
            map.set(ana, [strs[i]]);
        }
    }
    
    return Array.from(map.values());
};