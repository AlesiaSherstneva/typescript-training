var found = true;
var grade = 88.6;
var firstname = "Anup";
var lastname = 'Kumar';
/* Let's break it!
found = 0;
grade = "A";
firstname = false
*/
console.log(found);
console.log("The grade is " + grade);
console.log("Hi " + firstname + " " + lastname);
// Use template Strings
console.log("Hi ".concat(firstname, " ").concat(lastname));
