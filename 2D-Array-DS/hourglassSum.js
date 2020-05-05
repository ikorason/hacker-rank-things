/**
 * @param arr {Array}
 */
function hourglassSum(arr) {
    let result = -63

    for (let row = 0; row <= arr.length - 3; row++) {
        for (let col = 0; col <= arr.length - 3; col++) {
            // sum for the top hourglass
            let sum = arr[row][col] + arr[row][col + 1] + arr[row][col + 2]

            // add the middle of hourglass
            sum += arr[row + 1][col + 1]

            // add the bottom of hourglass
            sum += arr[row + 2][col] + arr[row + 2][col + 1] + arr[row + 2][col + 2]

            if (result < sum) {
                result = sum 
            }
        }
    }

    return result
}

// test
const arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];

console.log(hourglassSum(arr))