# Javascript

## Basics

1. document.write(); : The exact html line to be added to the source file. A method in the same field as alert, prompt and console.log.

2. parseInt(string) : To treat the string as integer; parseFloat(string) 

Note: parseFloat(“1.89 light years away”) returns only 1.89. The string needs to begin with the number, and all else will be forgotten.

3.	Math.round()
	Math.ceil()
	Math.floor()
	Math.random() - Generates a random number between 0 and 1.

4. Comparing strings, we see the lexicological order of letters. For example ‘apple’ < ‘bear’. Also numbers<letters

5. Boolean values used using true and false

6. Conditionals use else if with if, else.

7. Normal comments
8. Normal logical operators ( Todo: The efficiency run of logical operators)

9. Signature for javascript functions 
	function functionName()
	{
	}

10. Variable names can contain letters, numbers, $ and _ and cannot begin with numbers

11. Anonymous functions : Assigning functions to variables.

var alertRandom = function () {
//definition
};

Ends with semicolon, both at definition and calling

12. Multiple things can’t be returned in js.(like is possible in python, but an object can be returned, similar behaviour as to that of c++

13. Date.getFullYear(); - returns year.

14. isNaN() - returns Boolean based on whether the argument is a number or not. (NotaNumber)

15. Errors : throw new Error(“message”);

16. Array and objects are pass by reference and normal variables by pass by value

17. Loop working’s : normal, for both while and for

18. ‘rgb(‘+red+’,’+green+’,’+blue+)

## Arrays
1. Array in js : var arr = []; Can be thought of as a list of items, simply. We can store different types of data together in an array based in javascript.

2. Accessing elements out of scope leads to return of undefined item. (Shoutout the difference between null and undefined) Mutable

3. arr.length : array size
4. arr.push(element) : can be used to append an element to the end of the array. Can be used to append many objects at once as well. For exam numbers.push(7,8,9)

5. arr.unshift(element) : to add elements to the beginning of the array

6. arr.shift(); - returns and removes the first element of the array
7. arr.pop(); - returns and removes the last element of the array

8. arr.join(delimiter) : joins the elements of the array separated by a delimiter such as ','.

9. arr.concat(arr2) : to add all the elements of one list to another, and returns a new array

10. arr.indexOf(element) : returns the index if element present, else -1

*Note.* var element = document.getElementId();
This element variable stores the node reference to the tag in the document object. innerHTML refers to the html in the element selected using this selector and hence can be changed accordingly as per requirements. The 'document' object is the main focus here. 

## Object
1. var student = {}; //map is being referred to in js as object. normal key value pair rules to be followed. The key can be treated as variable itself and hence the naming convention is applicable here Seperated by ':'. 

2. Array different from object because of the accessing method, i.e. index and keys. Accessing objects in objects can be done both by [] and . notation. It can also be used to add new elements to the object.

3. To iterate over an object, we use for in loop that is, for ( var prop in student)
{
	console.log(prop);
} 

4. To access values corresponding to the key, we need to use square brackets only. dots can be used. And for square we need to use quotes in key. 

5. json : javascript object notation : one of the most popular data exchange formats on the web. Used with Ajax to exchange data between server and browser.

6. null can also be compared to in conditionals


## ES2015

1. TC39 is the group that looks into the specifications of javascript and introduced ECMA Script(ES). One of the most popular is ES6 or ES2015. 

*Note.* Coffee script/DART/Vanilla etc are forms of javascript with certain differences like syntax and compilation requirements.
Javascript was first introduced in NetScape Navigator.

2. ES Lint : Linter software

3. Other methods to create variables, const and let

const pi = 3.14;
let name = "Shiv";

const protects from being completely overwritten. arrays can be pushed, popped to and similarly for objects. Let is similar to var but has block level scope. Let is important and should be used with good caution.

Use of var should be avoided because of scope issues.

4. Template literal is handled using " \`\` ". To move onto next line in normal strings, we need to use + and other things. And "" also had to be taken proper care while adding bits of tags etc. All of these does not need to be taken care of in ES6.

5. Interpolation : using of placeholders at right points.

'Hello, ${name}, nice to see' : No need to use + again and along with taking care of "" symbols at the right point.

6. Arrow function 

const sayName = () => {
	console.log("Arrow Function");
}

7. There were majorly two ways to declare variables. One was function declaration and other was expression. Arrow is the third.

8. Single argument arrow functions can be made very concise and can be used to clean up code as much as possible. If there is only one argument then paranthesis are not required. If there is only one line then return is not required. Even the curly braces can be removed in case of single line functions.

## DOM (Document Object Model)

1. Three basic steps for adding interactivity on a webpage : 1. Selecting elements
	2. Manipulating elements and corresponding contents
	3. Listening for events on buttons and other actions on the webpages 

2. DOM gives a structure to the html document that can be exploited by javascript to make the webpage more dynamic and interactive. It can be thought of as a model which allows you to get around different elements in a webpage, like a map helps us to get around different places, the major differnce being that the changes we make via DOM are very much real, like if we were to make a street in a map, it were to become real in the real world.

3. DOM provides the webpage a tree like structure, where the document object can be thought of as the root node. 

<insert picture>

Sample of selecting element 

const heading = document.getElementById('myHeading');

4. For event listener, we need to pass the event and the corresponding action function when the event occurs. Also here when we use const, that doesn't mean that we can not change its underlying properties or use its method functions, what it really means is that it can't be reassigned.

heading.addEventListener('click',()=>{
	myHeading.style.color = 'red';
});

5. Other selection methods : document.getElementsByTagName() -> returns a collection(array) of elements, document.getElementsByClassName(), document.querySelector(), document.querySelectorAll(). 

6. The last two are more generic in nature and can be used to select elements via the CSS style, i.e. direct for tags, # for ids, and . for classes. Can also be used to select via attributes as well. 

document.querySelector([title="label"]) i.e. with attribute and its corresponding value in the square brackets. 

Also querySelectorAll returns all elements that satisfy the conditions whereas querySelector selects only the first element.

*Note.* Popular resources to check for cross platform compatability are MDN, caniuse.com, babel. Some features of javascript might not be supported by all browsers and might lead to errors.

7. To select a specific attributed element, we need to use square brackets for the element and mention the property, and the proper hierarchy needs to be mentioned to get the desired effect.

let navigationLinks = document.querySelectorAll('nav>ul>li>a[href]');
let galleryLinks = document.querySelectorAll('#gallery>li>a[href]'); 
let footerImages = document.querySelectorAll('footer>a>img');

## Modifying element contents on a webpage

1. textContent returns the text content of the selected element and can be manipulated. The inner html returns the string for exact html inside the tag and can also be manipulated accordingly.

Element.attribute and Element.className are also modifier methods.
Element.value

2. Element.style is itself an object and is used to override the style of the element set in either html file or css. 
3. Element.style are mostly used as setters and not getters because of no knowledge availability of styling information.

Element.style.color;
Element.style.backgroundColor;

4. Style is used a lot to show and hide elements on a page. style.display can be used to toggle between displaying and not displaying some content on a webpage. The two values that it can take are 'none' & 'block'.

5. document.createElement(element); Doesn't straight away make the element appear on the page, needs to be included in the dom of the page. This is done by **selecting some element and then appending the created element to that selected element**.

Node.appendChild(childElement); 
Node.removeChild(childElement);

6. A function can be passed around like a normal argument to other functions i.e. functions are also first class citizens in javascript.

7. window.setTimeout(func,delay,parameters); delay's unit is milliseconds. Callback function since called after a certain delay. 

8. Some other event types include mouseover and mouseout.

9. Also the event listener gets attached to the elements. They are not there by default for the new ones.

10. Event bubbling needs to be kept in mind while adding event listeners to elements. 

11. To act on the cerain child element on which the event has triggered, we can use the event object which needs to be passed in the event handler as an argument 
(event) for it to become available. 

event.target and event.target.tagName

12. The parent for a certain node can be selected using Node.parentNode and can be used to traverse the dom, i.e can be used to remove an element on a certain element specific to it by handling the parent aptly.

previousElementSibling 
Node.insertBefore() -> parentNode.insertBefore(newNode,referenceNode);

*Note.* Nodes will be null if there are no nodes where we are trying to reference them.

13.Can also be used to insert element after a certain element. Only the ordering will vary a little.

14. We also have parentNode.children property to gain access of all children(will obviously return an array) of a node.
Similarly nextElementSibling can also be used while traversing DOM.

parentNode.firstElementChild
parentNode.lastElementChild

## jQuery

__adds conveniences which make dom manipulation much easier.__ Uses CSS selectors for selecting elements. Was created in the first place to enable easier cross platform javascript programming, since things running on one browser didn't always run on others. Due to the recent advancements in browser tech, there is debate if whether jQuery is required at all, and the answer is yes. 

jQuery can be considered a js function and has its own methods added. We place the element to be selected with the apt CSS selector in its arguments, and then apply the required method. 

``javascript
	jQuery('#mybox').hide();
``

The jQuery above can be replaced by a $ sign which acts as a shorthand for jQuery.

``javascript
	$('#mybox').hide();
``

Adding event listener in jQuery 

``javascript
$('#mybox').click(function{
	alert('You clicked the box');
});
$('h1').click(()=>{
	alert('You clicked h1');
});
``
