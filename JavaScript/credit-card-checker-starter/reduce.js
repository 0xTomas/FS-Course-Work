// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]

const sum = valid1.reduce((total, currentNumber, currentIndex) => {
    let index = 0
    // console.log(total)
    if (currentIndex % 2 === 0) {
        return total + currentNumber
    } else {
        if (currentNumber >= 5) {
            return total + (currentNumber * 2) - 9
        } else {
            return total + currentNumber * 2
        }
    }
}, 0)

console.log(sum)