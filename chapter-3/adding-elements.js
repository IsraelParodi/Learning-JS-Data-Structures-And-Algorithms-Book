Array.prototype.insertFirstPosition = function (value) {
  // this is the array that is using funcion -> [1,2,3]
  // this.length is the length of the array that is using the function -> 3
  for (let i = this.length; i >= 0; i--) {
    // We set the initial value to be equal the lenght of the array
    // and we add the condition that the index should be equal or greater than zero
    // The length of the array will generate that the array will expand by one naturally because of the nature of array indexes
    this[i] = this[i - 1]; // By doing this we are moving the values and indexes from bottom to start
  } // The result of this iteration will be -> [undefined, 1, 2, 3]
  this[0] = value; // At this point we set the undefined value with the one passed in the parameters
};

const numbers = [1, 2, 3];
numbers.insertFirstPosition(-10);
console.log(numbers);
