/**
 * 73. Set Matrix Zeroes, Blind 150
 *
 * Modifies the matrix in-place such that if an element is 0,
 * its entire row and column are set to 0.
 *
 * Time Complexity: O(m*n + k*(m+n))
 *   - O(m*n) to scan the matrix and find all zeros.
 *   - O(k*(m+n)) to update rows and columns for k zeros.
 * Space Complexity: O(k)
 *   - k is the number of zeros found, which are stored in an auxiliary array.
 *
 * @param {number[][]} matrix - The input matrix.
 * @return {void} - The matrix is modified in-place.
 */
var setZeroes = function(matrix) {
    let arr = [];
    // First pass: record the positions of all zero elements.
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                arr.push([i, j]);
            }
        }
    }
    
    // Second pass: for each recorded zero, set its entire row and column to 0.
    for (let i = 0; i < arr.length; i++) {
        let row = arr[i][0];
        let col = arr[i][1];
        // Set the entire row to 0.
        matrix[row].fill(0);
        // Set the entire column to 0.
        for (let j = 0; j < matrix.length; j++) {
            matrix[j][col] = 0;
        }
    }
    
    // The function modifies the matrix in-place.
};