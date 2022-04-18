// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]

const sum = valid1.reduce((total, currentNumber, currentIndex) => {
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

const people = [
    { name: "Kyle", age: 29},
    { name: "Toma", age: 29},
    { name: "Matt", age: 31},
    { name: "Niko", age: 31},
]

const result = people.reduceRight((groupedPeople, person) => {
    const age = person.age
    // If statement with strange syntax?
    if (groupedPeople[age] == null) groupedPeople[age] = []
    groupedPeople[age].push(person)
    return groupedPeople
}, {})

console.log(result)

const num1 = 8
const num2 = 12

if (num1 > num2) num2 += 1
