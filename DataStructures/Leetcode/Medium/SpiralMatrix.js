/**
 * 54. Spiral Matrix, Blind 150
 *
 * Returns the elements of the matrix in spiral order.
 *
 * Time Complexity: O(m*n) - where m and n are the dimensions of the matrix.
 * Space Complexity: O(m*n) - to store the result array.
 *
 * @param {number[][]} matrix - The input matrix.
 * @return {number[]} - The elements of the matrix in spiral order.
 */
var spiralOrder = function(matrix) {
    let result = [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    
    while (top <= bottom && left <= right) {
        // Traverse from left to right along the top row.
        for (let j = left; j <= right; j++) {
            result.push(matrix[top][j]);
        }
        top++;
        
        // Traverse from top to bottom along the right column.
        for (let j = top; j <= bottom; j++) {
            result.push(matrix[j][right]);
        }
        right--;
        
        // Traverse from right to left along the bottom row, if still within bounds.
        if (top <= bottom) {
            for (let j = right; j >= left; j--) {
                result.push(matrix[bottom][j]);
            }
            bottom--;
        }
        
        // Traverse from bottom to top along the left column, if still within bounds.
        if (left <= right) {
            for (let j = bottom; j >= top; j--) {
                result.push(matrix[j][left]);
            }
            left++;
        }
    }
    
    return result;
};