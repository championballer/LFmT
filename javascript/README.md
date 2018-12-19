# Javascript

## Basics

1. document.write(); : The exact html line to be added to the source file. A method in the same field as alert, prompt and console.log.

2. parseInt(string) : To treat the string as integer; parseFloat(string) 

Note: parseFloat(“1.89 light years away”) returns only 1.89. The string needs to begin with the number, and all else will be forgotten.

3.	Math.round()
	Math.ceil()
	Math.floor()
	Math.random() - Generates a random number between 0 and 1.

4. Comparing strings, we see the lexicological order of letters. For example ‘apple’ < ‘bear’. Also numbers < letters

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

```javascript
var alertRandom = function () {
//definition
};
```
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

3. To iterate over an object, we use for in loop that is,
```javascript
for ( var prop in student)
{
	console.log(prop);
} 
```
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

```javascript
const sayName = () => {
	console.log("Arrow Function");
}
```
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
```javascript
const heading = document.getElementById('myHeading');
```
4. For event listener, we need to pass the event and the corresponding action function when the event occurs. Also here when we use const, that doesn't mean that we can not change its underlying properties or use its method functions, what it really means is that it can't be reassigned.

```javascript
heading.addEventListener('click',()=>{
	myHeading.style.color = 'red';
});
```

5. Other selection methods : document.getElementsByTagName() -> returns a collection(array) of elements, document.getElementsByClassName(), document.querySelector(), document.querySelectorAll(). 

6. The last two are more generic in nature and can be used to select elements via the CSS style, i.e. direct for tags, # for ids, and . for classes. Can also be used to select via attributes as well. 

document.querySelector([title="label"]) i.e. with attribute and its corresponding value in the square brackets. 

Also querySelectorAll returns all elements that satisfy the conditions whereas querySelector selects only the first element.

*Note.* Popular resources to check for cross platform compatability are MDN, caniuse.com, babel. Some features of javascript might not be supported by all browsers and might lead to errors.

7. To select a specific attributed element, we need to use square brackets for the element and mention the property, and the proper hierarchy needs to be mentioned to get the desired effect.

```javascript
let navigationLinks = document.querySelectorAll('nav>ul>li>a[href]');
let galleryLinks = document.querySelectorAll('#gallery>li>a[href]'); 
let footerImages = document.querySelectorAll('footer>a>img');
```
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

```javascript
	jQuery('#mybox').hide();
```

The jQuery above can be replaced by a $ sign which acts as a shorthand for jQuery.

```javascript
	$('#mybox').hide();
```

Adding event listener in jQuery 

```javascript
$('#mybox').click(function{
	alert('You clicked the box');
});
```

```javascript
$('h1').click(()=>{
	alert('You clicked h1');
});
```

__jQuery needs to be added to the document wherever it is used. Even in console if used there.__ This can be done by adding the js file linking it offline or adding its online linked file.

All jQuery animations run for 100ms by default. Can be changed by passing a value as an argument.

Method chaining is also possibe in jQuery. 
```javascript
$('#flashMessage').hide().slideDown(1000).delay(3000).slideUp(1000);
```

Most jQuery methods return the same elements they were called with and hence method chaining becomes logically possible here. Can be thought of being analogous to factory creation methods.

Analogous to vanilla js's .textContent(), .innerHTML() : .text() and .html() methods in jQuery.

Without parameters, .html() is a getter and with them it is a setter.

Inserting html in .text() gets it to be rendered by the browser as plaintext. For that to happen we need to work with the .html() method.

To extract information from user input using forms, select the element and then use .val() method to work through.

Unobstrusive js : 1.separation of conerns
2. cross browser consistency
3. performance enhancement : user should have the same exp. even if js is blocked or unavailable for any reason. In the spoiler exercise, we want the spoiler to be avialable if js isn't and for the button to be created dynamically and then to have the functionality as before.

.append() and .prepend() can be used to add elements to certain elements on the page. append adds the element as the last child whereas .prepend adds the element as the first child. 

```javascript
const $button = $('<button>Reveal Spoiler</button>'); //Creates the element with this html
```

having jQuery variables with $ sign is a convention to keep in mind different variables depending on the framework.

Other event handling methods : .mouseover(): When mouse moves over an element, 
.keypress(): certain key on an input, 
.focus(): when input field is clicked.
.mouseleave()

Events can be added to the same element if the function to be executed along with them is same, using .on(events,function) method.

```javascript
$('#element').on('click keypress',function(){
	});
```

The order in which the jQuery runs matters a lot. There might be issues when we add events to dynamically added elements due to ordering. To account for this we use event delegation(__attach an event listener to a parent element that fires when an event occurs on a child element__) and event propogation(when an event moves from child to parent, and due to this it doesn't matter if the element is present at load up or not. If at any point of time, the child exits then the effect will take place through the parent element). We add the dynamic behaviour using the parent element of the intended element which does not exist yet using the .on() method.

```javascript
$(parent).on(event,child,function());
```

The event object can be used to handle the current child element on which the event takes place. It contains information about the event that took place and needs to passed as a parameter to an anonymous function. It can be used as any of the three, 'event','evt' or 'e' as per convention. To access the current element, we use target.

DOM traversal using jQuery

$('li').eq(2); -> returns the li with index 2 on the page. Negative indices are also accounted for. .prev() and .next() to access prev and next sibling elements in the dom. .parent() to traverse to the parent of the element.

'this' can be used in place of event.target only when using function (){} for anonymous function. If arrow function is employed then this might not work. To read : https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/

There are two types of selectors that can be used with jQuery i.e. CSS and jQuery specific selectors.

:odd selector helps select odd elements of a certain heavier selector.

__One added benefit of jQuery is the inbuilt methods that run loops on the object in the variable, hence it runs on all variables.__

$('a:odd').hide();

The jQuery function doesn't return regular dom objects rather jQuery elements.

String matching while selecting elements. So '^' checks for value from front and $ checks for back.

.attr() to modify or get attributes of the elements. Can be used as both getter and setter method. Can be used as a getter by just passing the attribute name in arguments and as setter by passing both attribute and to be set value as arguments.

To manipulate the elements we can get or set using the .css() method in a similar manner as above. .addClass() adds the corresponding class to the selected element. .removeClass(), .toggleClass()

^= can be used to select elements with certain attributes whose value start with the value after the '='. Similarly $ is used for terminating characters in a string. 

```javascript
const $secureLinks = $(a[href^="https://"]);
```

When using css properties in javascript use Camel Case and not kabab case as used in css.

```javascript
const $submit = $('.submit-btn');
$submit.attr('disabled',true).addClass('disabled');
```

preventDefault() method is to stop the browser from entering a default behaviour on certain event. Like the default setting in a browser is to follow a link when clicked but that can be prevented using preventDefault(). Done through event object i.e. event.preventDefault();

Looping in jQuery: 

```javascript
for(let index = 0;i<$collection.length;index++)
{
	const $element = $collection[index];
	//do something with the element
}
```

An alternative for the above is the following

```javascript
	$collection.each(function(index,element){});
```

Adding jQuery using CDN(Content Delivery Network) is a neater way of using websites without needing the files offline of having to download them to run.

## AJAX(Asyncronous Javascript and XML)

loading content without reloading webpages. Examples include google maps, where we move around the map, without the page reloading. Or sites where voting is active. Its more like rather than asking for complete webpages on a certain event from a server. We ask for changes to be made to the current webpage and accordingly those changes sent as response by the server are incorporated.

Official name is XMLHttpRequest(XHR) Object.

A : Asynchronous - The webpage doesn't freeze whenever a request is sent out rather it continues to stay interactive and responds to other requests if made. The responses might not come in the same order as they were sent due to other constraints.

XML : Way to handle server requests and responses. Not a preferred method any more.

The 4 steps in which AJAX works : 
1. Create XMLHttpRequest Object , const request = new XMLHttpRequest();
2. Create callback function
3. Open request
4. Send request 

```javascript
request.onreadystatechange = function(){
	if(request.readyState === 4)
	{
		document.querySelector('#ajax').innerHTML = request.responseText;
	}	
};

request.open('GET','sidebar.html');
```

## NodeJS : Javascript outside the browser

1. Applications : Chat applications, takes a video of the sender when they send messages and hence adds another element of personality to the communication. Good to work on real time applications where there are a lot of people interacting with each other. Productivity tools (Cloud 9), and many other useful applications. Wallmart, PayPal use nodejs.

2. After installation for nodejs and npm(node package manager) is done. (http://treehouse.github.io/installation-guides/linux/node-linux.html)

3. The file is saved with normal js extension, and is run using - (node filename).

4. Three common methods in nodejs : console.log(), console.error() - to print errors to the terminal, console.dir({}) - to print an object in readable format

5. node only results in the js REPL, which can be used to experiment with code.

6. While working with javascript we have two kinds of objects : a)native(provided by js and available everywhere), b)host : window, document, history and xmlhttprequest(provided by the environment, dependent on the context as to where the language is being operated, in the browser using browser specific apis, these will be different from the ones in other environments and context). For example the DOM, or Document Object Model is not available in Node.js but are available in the Browser. Likewise, the host objects to access the local file system is not available in the Browser but are in Node.js. Google chrome's V8 engine led to nodejs. Chorme's V8 engine ripped out, leaving behind host objects to welcome other objects to build other applications. Coupling of the V8 engine with the APIs is called the nodejs environment. Important to know what is available to us and when while dealing with makinig apps.

7. Why nodejs? The assistant analogy, handling one request at a time, and not being able to process other requests until and unless the response for that request is received back (blocking languages). Nodejs is more efficient in this area (Non-blocking). Fast and efficient. Doesn't take up that much computing resources.

8. API : Application Programming Interface, The documentation explains the API or how we interface with the objects, environment or framework currently being worked on. The objects or methods that can be used in any given environment. In browser it is dom to interface with the webpages. In nodejs the API is what we interface with the file system or other APIs or making HTTP requests. Decreasing breaking risk from 0 - 3. 0 - Deprecated, 1 - Experimental. 2 - Stable, 3 - Locked. We are safe using 2 and 3 apis'. Common ones : console, filesystem (read and write files using this) and http, https to retrieve information from the internet.

9. Each api will have to be included before being put into use in the application. We receive the api in a variable and using that variable we access the methods of the api. For example
```javascript
const https = require('https');

https.get("url",(res)=>{

	});
``` 
res here is the response being sent by the server on the get request made here. Since nodejs is made up in the non-blocking method, the application can still be doing other things while we wait for a response from the server. Keep in mind the stability index before using anything in nodejs.  

'on' used with an object means it is responding to an event. Encountered very frequently in nodejs. There can be two events in javascript. And callbacks can be defined for these. They are User event and System event. The difference between the two comes in with reference to the triggers. In user events the event is both defined and triggered by the user but in a system event it is defined by a user but gets triggered by the system.

10. Here https is the object and needs to be included first in the file to be used later. We use the get method on the https object and pass it the url that needs to be fetched. The response from the server comes to the res object which can be later accessed in the callback function to be which it needs to be passed. 

```javascript
const request = https.get(`https://teamtreehouse.com/${username}`,(res)=>{
	console.dir(res);

	res.on('data', data=>{
			//do something with data
			console.log("Data:",data.toString());
		});

	res.on('end',()=>{

		});
});
```

The response of a js request is in the form of a buffer since all the data in nodejs doesn't come at once, rather it comes in data packets. And it can be used as string using data.toString(); 
Generally whenever there is a data event to an object in node, there will be a corresponding end event as well. That is triggered when the i/p stream doesn't have any more data to send.

11. typeof keywork can be used to find the type of any variable.
12. Process of converting a string into a datastructure is called parsing.