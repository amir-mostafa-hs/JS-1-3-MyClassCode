const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

/*
const sumNumber = numbers.reduce((accumulator , currentValue) => {
    return accumulator + currentValue;
}initialValue);
*/

const num = numbers.reduce((number1,number2)=>{
    return number1 + number2;
},10);

console.log(num);