const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

/* 
    ! (.find) finds the first element of the array that matches our condition and returns it. !   
*/
const findText = numbers.find((num )=> num <= 10);

console.log(findText);