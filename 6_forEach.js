/*
array.forEach(element => {
    
});
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// numbers.forEach(function power(num) {
//     console.log(num ** 2);
// });

numbers.forEach(number => {
    console.log(number ** 2);
});

/*
 ! we can't Assigned ForEach to variable !

const textAssignedForEach = numbers.forEach((number) => {
  return (number ** 2);
});
console.log(textAssignedForEach);
*/