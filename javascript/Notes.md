### Freecodecamp notes


## Basics

* Comments : 
	// - For single line
	/* - For multi line comments

* Javascript Datatypes : 
	1. undefined
	2. null
	3. boolean
	4. string
	5. symbol
	6. number (generalised for integers and floats)
	7. object

* 'var' keyword for variable declaration

* Statements end with ';'

* Camel case is used in javascript

* Uninitialised variables has the value of undefined. Doing an arithmetic operation on this leads to NaN, meaning Not a Number. Concatenating to an undefined string leads to an undefined string as well.

* Escape literals can be used in strings to include quotes in strings.

* .length property of the string class can be used to find the length of the underlying string object. 

* strings can be considered as an array of characters with special properties defined in its class template. Therefore bracket notation can be used in strings in javascript.

* Javascript strings are immutable, i.e. they cannot be altered once created. Their contents cannot be changed. But that does not mean that they can't be reassigned.

* Arrays in javascript can also be defined using 'var' keyword. Plus arrays allow different kind of datatypes to be stored simulntaneously.

* Arrays are mutable.

* push function can be used to append data to the end of the javascript array. pop function removes and returns the last entered element. This allows for the array to be used as a stack very easily. 

* shift is used to remove the first element of the array. This allows for array to be used as queue, quite easily. Appropriate wrapping needs to be done to reap the benefits. unshift adds elements to the start of the array. These methods allow for flexibility on the direction that can be used for using arrays as stacks and queues.


* functions are defined using the 'function' keyword. Parameters don't need to be mentioned with var keyword in the functiond definition. If the function doesn't return a value, and its call is assigned to a variable, then the variable will be undefined.
```javascript
function functionName() {
  console.log("Hello World");
}
```

* Important thing to note is that varibles initialised without using the var keyword are created with global scope. This should be avoided at all points.