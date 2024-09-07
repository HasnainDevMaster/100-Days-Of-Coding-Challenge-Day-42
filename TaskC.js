"use strict";
// 100 Days Of Coding Challenge!
/** Question 126: “Navigating 'this' in Nested Functions”
Explain how the this keyword changes its value when used inside a nested function within a method.*/
//--------------------------------------------------------------------------------------------------
/** Explanation:
In the showValue method, this refers to the example object.

Inside the nestedFunction, this does not refer to the example object.
Instead, it refers to the global object (or undefined in strict mode).

To access the example object’s properties inside the nested function,
you can use a workaround like storing this in a variable. */
// An object with a method
const example = {
    value: 42,
    // Method to show the value property
    showValue: function () {
        // Store reference to 'this' in a variable 'self'
        const self = this;
        // 'self' refers to the current object 'example'
        console.log(self.value); // Output: 42
        // Nested function inside the method
        function nestedFunction() {
            // 'self' still refers to the 'example' object
            console.log(self.value); // Output: 42
        }
        // Call the nested function
        nestedFunction();
    },
};
// Call the showValue method
example.showValue();
