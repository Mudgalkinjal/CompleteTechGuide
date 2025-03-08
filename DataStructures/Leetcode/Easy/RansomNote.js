
// Leetcode 383. Ransom Note, Blind 150

/**
 * Checks if the ransom note can be constructed from the magazine.
 *
 * @param {string} ransomNote - The note to be constructed.
 * @param {string} magazine - The string containing available characters.
 * @return {boolean} - True if the note can be constructed, false otherwise.
 */
var canConstruct = function(ransomNote, magazine) {
    // Early check: if the ransom note is longer than the magazine, construction is impossible.
    if (ransomNote.length > magazine.length) {
        return false;
    }

    // Create a frequency map to count each character in the magazine.
    let map = new Map();

    // Populate the map with characters from the magazine.
    for (let i = 0; i < magazine.length; i++) {
        map.has(magazine[i])
            ? map.set(magazine[i], map.get(magazine[i]) + 1)
            : map.set(magazine[i], 1);
    }

    // Iterate over the ransom note characters.
    for (let i = 0; i < ransomNote.length; i++) {
        // Check if the character exists in the map.
        if (map.has(ransomNote[i])) {
            let count = map.get(ransomNote[i]);
            // If the character is available, decrement its count.
            if (count > 0) {
                map.set(ransomNote[i], count - 1);
            } else {
                // Character count is zero, so the note cannot be constructed.
                return false;
            }
        } else {
            // Character not found in the magazine.
            return false;
        }
    }

    // All characters are available in the required quantity.
    return true;
};
