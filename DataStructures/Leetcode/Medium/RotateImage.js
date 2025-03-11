/**
 * 48. Rotate Image, Blind 150
 *
 * Rotates an n x n matrix by 90 degrees clockwise in-place.
 * The rotation is performed in two steps:
 *   1. Transpose the matrix.
 *   2. Reverse each row of the transposed matrix.
 *
 * Time Complexity: O(n^2) - Both transposing and reversing each row require O(n^2) operations.
 * Space Complexity: O(1) - The rotation is done in-place using a constant amount of extra space.
 *
 * @param {number[][]} matrix - The input n x n matrix to rotate.
 */
var rotate = function(matrix) {
    let n = matrix.length;

    // Step 1: Transpose the matrix.
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    // Step 2: Reverse each row.
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n / 2; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][n - j - 1];
            matrix[i][n - j - 1] = temp;
        }
    }
};