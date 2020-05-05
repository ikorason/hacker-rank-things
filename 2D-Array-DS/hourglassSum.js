// test
const arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];

/**
 * @param arr {Array}
 */
function hourglassSum(arr) {
    let hourglasses = []

    for (let row = 0; row <= 3; row++) {
        for (let col = 0; col <= 3; col++) {
            let sum = 0
            
            sum += arr[row][col]
            sum += arr[row][col + 1]
            sum += arr[row][col + 2]
            sum += arr[row + 1][col + 1]
            sum += arr[row + 2][col]
            sum += arr[row + 2][col + 1]
            sum += arr[row + 2][col + 2]
    
            hourglasses.push(sum)
        }
    }

    return hourglasses.length > 0 ? Math.max(...hourglasses) : 0
}

console.log(hourglassSum(arr))