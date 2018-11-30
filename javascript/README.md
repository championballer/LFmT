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

Other methods to create variables, const and let

const pi = 3.14;
let name = "Shiv";

const protects from being completely overwritten. arrays can be pushed, popped to and similarly for objects. Let is similar to var but has block level scope. Let is important and should be used with good caution.

Use of var should be avoided because of scope issues.

Template literal is handled using "``". To move onto next line in normal strings, we need to use + and other things. And "" also had to be taken proper care while adding bits of tags etc. All of these does not need to be taken care of in ES6.

Interpolation : using of placeholders at right points.

'Hello, ${name}, nice to see' : No need to use + again and along with taking care of "" symbols at the right point.

Arrow function 

const sayName = () => {
	console.log("Arrow Function");
}

There were majorly two ways to declare variables. One was function declaration and other was expression. Arrow is the third.

Single argument arrow functions can be made very concise and can be used to clean up code as much as possible. If there is only one argument then paranthesis are not required. If there is only one line then return is not required. Even the curly braces can be removed in case of single line functions.

# DOM (Document Object Model)

Three basic steps for adding interactivity on a webpage : 1. Selecting elements
2. Manipulating elements and corresponding contents
3. Listening for events on buttons and other actions on the webpages 

DOM gives a structure to the html document that can be exploited by javascript to make the webpage more dynamic and interactive. It can be thought of as a model which allows you to get around different elements in a webpage, like a map helps us to get around different places, the major differnce being that the changes we make via DOM are very much real, like if we were to make a street in a map, it were to become real in the real world.

DOM provides the webpage a tree like structure, where the document object can be thought of as the root node. 

<insert picture>

Sample of selecting element 

const heading = document.getElementById('myHeading');

For event listener, we need to pass the event and the corresponding action function when the event occurs. Also here when we use const, that doesn't mean that we can not change its underlying properties or use its method functions, what it really means is that it can't be reassigned.

heading.addEventListener('click',()=>{
	myHeading.style.color = 'red';
});

Other selection methods : document.getElementsByTagName() -> returns a collection(array) of elements, document.getElementsByClassName(), document.querySelector(), document.querySelectorAll(). 

The last two are more generic in nature and can be used to select elements via the CSS style, i.e. direct for tags, # for ids, and . for classes. Can also be used to select via attributes as well. 

document.querySelector([title="label"]) i.e. with attribute and its corresponding value in the square brackets. 

Also querySelectorAll returns all elements that satisfy the conditions whereas querySelector selects only the first element.

Popular resources to check for cross platform compatability are MDN, caniuse.com, babel. Some features of javascript might not be supported by all browsers and might lead to errors.

To select a specific attributed element, we need to use square brackets for the element and mention the property, and the proper hierarchy needs to be mentioned to get the desired effect.

let navigationLinks = document.querySelectorAll('nav>ul>li>a[href]');
let galleryLinks = document.querySelectorAll('#gallery>li>a[href]'); 
let footerImages = document.querySelectorAll('footer>a>img');


