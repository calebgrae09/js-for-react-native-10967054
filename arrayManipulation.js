// arrayManipulation.js

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

module.exports = { processArray };
