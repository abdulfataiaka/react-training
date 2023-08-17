numbers = [ 2, 3, 4, 5, 6 ] // [ 2, 4, 6 ]

// reduce(callback, initialValue)

const finalResult = numbers.reduce((result, item, index) => {
    if (item % 2 === 0) {
        result.push(item);
    }
    return result;
}, []);

// console.log(finalResult);

/*

Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.

Test Data :
    ([2, "11", 3, "a2", false, 5, 7, 1]) -> 18
    ([2, 3, 0, 5, 7, 8, true, false]) -> 25
*/

const sumMixedArray = (mixedArray) => {
    const sum = mixedArray.reduce((result, item) => {
        if (typeof item === 'number') {
            return result + item;
        } else {
            return result;
        }
    }, 0);

    return sum;
};

const firstResult = sumMixedArray([2, "11", 3, "a2", false, 5, 7, 1])
console.log(firstResult) // 18

const secondResult = sumMixedArray([2, 3, 0, 5, 7, 8, true, false])
console.log(secondResult) // 25

