/**
 * 11. Container With Most Water, Blind 150
 *
 * Calculates the maximum area of water that can be contained.
 * Uses a two-pointer approach where the area is determined by the shorter line and the distance between pointers.
 *
 * Time Complexity: O(n) - The height array is traversed once.
 * Space Complexity: O(1) - Only constant extra space is used.
 *
 * @param {number[]} height - An array representing the height of lines.
 * @return {number} - The maximum area of water that can be contained.
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = -1;
    
    // Loop until the two pointers meet.
    while (left < right) {
        // The container's height is determined by the shorter line.
        let mini = Math.min(height[left], height[right]);
        // Calculate the current area.
        let curr = mini * (right - left);
        // Update the maximum area if the current area is larger.
        max = Math.max(max, curr);
        
        // Move the pointer corresponding to the shorter line inward.
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max;
};