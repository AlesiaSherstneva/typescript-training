let found: boolean = true;
let grade: number = 88.6;
let firstname: string = "Anup";
let lastname: string = 'Kumar';

/* Let's break it!
found = 0;
grade = "A";
firstname = false
*/

console.log(found);
console.log("The grade is " + grade);
console.log("Hi " + firstname + " " + lastname);

// Use template Strings
console.log(`Hi ${firstname} ${lastname}`)