const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];


const isIncludesTest = numbers.includes(20);

console.log(isIncludesTest);


const everyTest = numbers.every(num => num % 2 === 0);

console.log(everyTest);


const someTest = numbers.some(num => num % 2 === 0);

console.log(someTest);