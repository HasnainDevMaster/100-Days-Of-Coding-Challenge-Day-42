"use strict";
// 100 Days Of Coding Challenge!
/** Question 125: “Connecting Properties with 'this' ”
Modify a method in an object to use the this keyword to access another property in the same object.*/
//---------------------------------------------------------------------------------------------------
// An object with a method that uses the this keyword to access another property
const person = {
    firstName: "Sam",
    lastName: "Johnson",
    // Method to return the full name using 'this' to access properties
    getFullName: function () {
        // 'this' refers to the current object 'person'
        return this.firstName + " " + this.lastName;
    },
};
// Call the method to get the full name
console.log(person.getFullName()); // Output: 'Sam Johnson'
