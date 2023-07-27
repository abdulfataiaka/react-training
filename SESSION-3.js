// Explanation of normal vs arrow functions
// Array.forEach & Array.map

// Alphabets, Underscore & Numbers, where numbers cannot start

// Function name
// Function arguments
// Function body
// Function return value

function squareNumber(number) {
    const result = number ** 2;
    return result;
}

// The syntax difference between a regular and an
// arrow function is that arrow functions do not
// have names and are not declared with the function keyword
const multiply = (number1, number2) => { number1 * number2 };

const items = [5,6,7]  // [25, 36, 49]

const result1 = [];

for (let item of items) {
    const squaredValue = item ** 2;
    result1.push(squaredValue);
}

// console.log(result1);

const result2 = items.map(function callback(item, index) {
    const squaredValue = item ** 2;
    return squaredValue;
})

// console.log(result2);

const names = [['Doe', 'John'], ['Doe', 'Jane'], ['Aka', 'Abdulfatai']];
// ['John Doe', 'Jane Doe', 'Abdulfatai Aka']

const result3 = names.map(function callback(item, index) {
    const fullName = `${item[1]} ${item[0]}`;
    return fullName;
})

// console.log(result3);

const kiloMeterValues = [3, 9, 10, 6, 7, 4, 2];
// [3000, 9000, 10000, 6000, 7000, 4000, 2000];

const result = kiloMeterValues.map(function callback(kiloMeterValue) {
    const meter = kiloMeterValue * 1000;
    return meter;
});

console.log(result);