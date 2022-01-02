/*
while (Conditions for the end and start) {
    
}
*/

let pass = prompt(`write the password : `);
while (pass !== "123456789") {
    pass = prompt(`password is not ok; write the password again : `);
}
alert("Wellcom");

// break and return