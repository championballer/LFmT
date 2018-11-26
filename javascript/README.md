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

arr.indexOf(element) : returns the index if element present, else -1

var element = document.getElementId();
This element variable stores the node reference to the tag in the document object. innerHTML refers to the html in the element selected using this selector and hence can be changed accordingly as per requirements. The 'document' object is the main focus here. 

var student = {}; //map is being referred to in js as object. normal key value pair rules to be followed. The key can be treated as variable itself and hence the naming convention is applicable here Seperated by ':'. 

Array different from variable because of the accessing method, i.e. index and keys. Accessing objects in objects can be done both by [] and . notation. It can also be used to add new elements to the object.

To iterate over an object, we use for in loop that is, for ( var prop in student)
{
	console.log(prop);
} 

To access values corresponding to the key, we need to use square brackets only. dots can be used. And for square we need to use quotes in key. 

json : javascript object notation : one of the most popular data exchange formats on the web. Used with Ajax to exchange data between server and browser.

null can also be compared to in conditionals

TC39 is the group that looks into the specifications of javascript and introduced ECMA Script(ES). One of the most popular is ES6 or ES2015. 

Coffee script/DART/Vanilla etc are forms of javascript with certain differences like syntax and compilation requirements.
Javascript was first introduced in NetScape Navigator.

ES Lint : Linter software

# ES2015