const array = [
  ["0-Benyamin", "0-Bani", "0-Alireza", "0-Shirin"],
  ["1-Pourya", "1-Amir", "1-Sirvan", "1-Deniz"],
  ["2-Bahar", "2-Maryam", "2-Ali", "2-Mohammad"],
  ["3-Sarah", "3-Sina", "3-AmirAli", "3-Anahid"],
];

// console.log(array.length);
// console.log(array[array.length]);
/*
* In the array the starting index is 0
* But in array.length counting starts one
*/

// for (let step = 0; step <= array.length-1; step++) {
//     console.log(`index of array: **${step}** is : **${array[step]}**`);
// }

for (let indexArr1 = 0; indexArr1 < array.length; indexArr1++) {
    const array2 = array[indexArr1];
    for (let indexArr2 = 0; indexArr2 < array2.length; indexArr2++) {
        console.log(
          `index of array */${indexArr1}/* and index of array2 */${indexArr2}/* is */${array2[indexArr2]}/*`
        );
    }
    console.log("--------------------------------------------------------");
}

