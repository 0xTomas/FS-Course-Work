// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// Test array
const test1 = [4, 5, 3, 9, 6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Validate credit card function:

const validateCred = array => {

    let sum = 0
    let numberToAdd
    let double = false

    // for (let i = array.length - 1; i >= 0; i--) {
    array.forEach(i => {
        if (double === false) {
            sum += array[i]
        } else {
            if (array[i] >= 5) {
                sum += (array[i] * 2) - 9
            } else {
                sum += (array[i] * 2)
            }
        }
    // If the 'double' variable is false, switch it to true.
    // double = false === double;
    double = !double
    })

    if (sum % 10 === 0) {
        console.log('The card is valid.')
    } else {
        console.log('The card is invalid.')
    }
    return sum % 10 === 0
}

// Find invalid card function:

const findInvalidCard = nestedArray => {

    let invalidList = []
    for (let i=0; i < nestedArray.length; i++) {
        if (!validateCred(nestedArray[i])) {
            invalidList.push(nestedArray[i])
        }
    }
    return invalidList
}

// Identify invalid card companies:

const idInvalidCardCompanies = nestedArray => {
    let invalidCompanies = []
    for (let i=0; i < nestedArray.length; i++) {
        if (!validateCred(nestedArray[i])) {
            switch (nestedArray[i][0]) {
                case 3:
                    if (!invalidCompanies.includes('Amex')) {
                        invalidCompanies.push('Amex')}
                case 4:
                    if (!invalidCompanies.includes('Visa')) {
                        invalidCompanies.push('Visa')}
                case 5:
                    if (!invalidCompanies.includes('Mastercard')) {
                        invalidCompanies.push('Mastercard')}
                case 6:
                    if (!invalidCompanies.includes('Discover')) {
                        invalidCompanies.push('Discover')}
                default:
                    if (!invalidCompanies.includes('Company not found')) {
                        invalidCompanies.push('Company not found')}
            }
        }
    }
    return invalidCompanies
}

// Convert string to array to be parsed function:

const convertStringToArray = string => {
    let newString = []
    for (let i=0; i < string.length; i++) {
        newString.push(string[i])
    }
    return newString
}

// Convert invalid to valid credit card:

const convertInvalidToValid = array => {

    let sum = 0
    let numberToAdd
    let double = false

    // for (let i = array.length - 1; i >= 0; i--) {
    array.forEach(i => {
        if (double === false) {
            sum += array[i]
        } else {
            if (array[i] >= 5) {
                sum += (array[i] * 2) - 9
            } else {
                sum += (array[i] * 2)
            }
        }
        // If the 'double' variable is false, switch it to true.
        // double = false === double;
        double = !double
    })

    let difference = sum % 10 // 5
    console.log(`The sum was ${sum}, the difference was ${difference} and the last digit was a ${array[array.length - 1]}.`)

    let changed = false
    if (!validateCred(array)) {
        if (array[array.length - 1] >= difference) {
            array[array.length - 1] = array[array.length - 1] - difference
            changed = true
        }
        if (array[array.length - 1] < difference) {
            array[array.length - 1] = array[array.length - 1] + (10 - difference)
            changed = true
        }
    }

    console.log(array)
    if (changed === true) {
        console.log(`The card number is now valid as the last digit was changed to a ${array[array.length - 1]}.`)
    } else {
        console.log('The card was already valid and remains unchanged.')
    }
}

// Testing the functions:

const testString = convertStringToArray('123456789012345')

validateCred(testString)

convertInvalidToValid(mystery5)








