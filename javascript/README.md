# Javascript

document.write(); : The exact html line to be added to the source file

parseInt(string) : To treat the string as integer

parseFloat(string) 

Note: parseFloat(“1.89 light years away”) returns only 1.89. The string needs to begin with the number, and all else will be forgotten.

Generating random numbers.: Math Object

Math.round()
Math.ceil()
Math.floor()
Math.random() - Generates a random number between 0 and 1.

Comparing strings, we see the lexicological order of letters. For example ‘apple’ < ‘bear’. Also numbers<letters

Boolean values used using true and false

Conditionals use else if with if, else.

Normal comments
Normal logical operators ( Todo: The efficiency run of logical operators)

Signature for javascript functions 
function functionName()
{
}

Variable names can contain letters, numbers, $ and _ and cannot begin with numbers

Anonymous functions : Assigning functions to variables.

var alertRandom = function () {
//definition
};

Ends with semicolon, both at definition and calling

Multiple things can’t be returned in js.

Date.getFullYear(); - returns year.

isNaN() - returns Boolean based on whether the argument is a number or not. (NotaNumber)

Errors : throw new Error(“message”);

Array and objects are pass by reference and normal variables by pass by value

Loop working’s : normal, for both while and for

‘rgb(‘+red+’,’+green+’,’+blue+)

Array in js : var arr = []; Can be thought of as a list of items, simply. We can store different types of data together in an array based in javascript.

Accessing elements out of scope leads to return of undefined item. (Shoutout the difference between null and undefined) Mutable

arr.length : array size
arr.push(element) : can be used to append an element to the end of the array. Can be used to append many objects at once as well. For exam numbers.push(7,8,9)

arr.unshift(element) : to add elements to the beginning of the array

arr.shift(); - returns and removes the first element of the array
arr.pop(); - returns and removes the last element of the array

arr.join(delimiter) : joins the elements of the array separated by a delimiter such as ','.

arr.concat(arr2) : to add all the elements of one list to another, and returns a new array
