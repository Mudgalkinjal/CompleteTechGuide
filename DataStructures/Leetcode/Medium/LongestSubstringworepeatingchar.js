/**
 * 3. Longest Substring Without Repeating Characters, Blind 150
 *
 * Finds the length of the longest substring without repeating characters.
 * Uses a sliding window approach along with a Map to track the most recent indices of characters.
 *
 * Time Complexity: O(n) - Each character is processed once.
 * Space Complexity: O(min(n, m)) - Where m is the size of the character set.
 *
 * @param {string} s - The input string.
 * @return {number} - The length of the longest substring without repeating characters.
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) return s.length;

    let max = 0;
    let left = 0;  // Start index of the sliding window
    let visited = new Map();  // Map to track the latest index of each character

    for (let right = 0; right < s.length; right++) {
        // If the current character has been seen and is within the current window.
        if (visited.has(s[right]) && visited.get(s[right]) >= left) {
            // Move the left pointer right past the last occurrence of s[right]
            left = visited.get(s[right]) + 1;
        }

        // Update the latest index for the current character
        visited.set(s[right], right);

        // Calculate the window size and update max if it's larger than the current max.
        max = Math.max(max, right - left + 1);
    }
    
    return max;
};