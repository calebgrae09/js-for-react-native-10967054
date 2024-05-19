// arrayManipulation.js

function processArray(numbers) {
    return numbers.map(num => {
        if (num % 2 === 0) {
            return num * num; // Square even numbers
        } else {
            return num * 3; // Triple odd numbers
        }
    });
}

function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase(); // Capitalize if the number is even
        } else {
            return str.toLowerCase(); // Convert to lowercase if the number is odd
        }
    });
}
module.exports = { processArray };
