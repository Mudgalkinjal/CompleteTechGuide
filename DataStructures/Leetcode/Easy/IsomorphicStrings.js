
/**
 * 205. Isomorphic Strings, Blind 150
 *
 * Determines if two strings s and t are isomorphic. 
 * Two strings are isomorphic if the characters in s can be replaced to get t,
 * with every occurrence of a character mapped to the same character, and no two characters map to the same character.
 *
 * @param {string} s - First string.
 * @param {string} t - Second string.
 * @return {boolean} - Returns true if the strings are isomorphic, false otherwise.
 */
var isIsomorphic = function(s, t) {
    // If lengths differ, they cannot be isomorphic.
    if (s.length !== t.length) return false;
    
    // Create maps for the character mappings between s and t.
    let mapST = new Map();
    let mapTS = new Map();

    // Iterate over each character in the strings.
    for (let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];

        // Check the mapping from s to t.
        if (mapST.has(charS)) {
            if (mapST.get(charS) !== charT) return false;
        } else {
            mapST.set(charS, charT);
        }

        // Check the mapping from t to s.
        if (mapTS.has(charT)) {
            if (mapTS.get(charT) !== charS) return false;
        } else {
            mapTS.set(charT, charS);
        }
    }
    
    // All mappings are consistent.
    return true;
};
