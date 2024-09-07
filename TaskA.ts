// 100 Days Of Coding Challenge!

/** Question 124: “Harnessing 'this' to Self-Reference”
Create a function inside an object that returns the objects own name property using the this keyword.*/

//-----------------------------------------------------------------------------------------------------

// An object with a function that returns its own name property
const obj = {
  name: "MyObject",
  // Function to return the object's own name property
  getName: function () {
    // 'this' refers to the current object 'obj'
    return this.name;
  },
};

// Call the function to get the object's own name property
console.log(obj.getName()); // Output: 'MyObject'
