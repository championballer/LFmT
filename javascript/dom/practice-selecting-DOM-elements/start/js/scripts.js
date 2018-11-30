// 1: Select the element with the ID 'about'.
//    Store the element in the variable `about`.
const about = document.querySelector('#about');
about.style.border = "2px solid firebrick";

// 2: Select all the <h2> elements in the document.
//    Set the color of the <h2> elements to a different color.
const header = document.querySelectorAll('h2');
for(var i = 0;i<header.length;i++)
{
	header[i].style.color = 'red';
}

// 3: Select all elements with the class '.card'.
//    Set their background color to the color of your choice.
const card = document.querySelectorAll('.card');
for(var i=0;i<card.length;i++)
{
	card[i].style.backgroundColor = 'grey';
}

// 4: Select only the first <ul> in the document.
//    Assign it to a variable named `ul`.
const ul = document.querySelector('ul');
ul.style.border = "2px solid indigo";

// 5: Select only the second element with the class '.container'.
//    Assign it to a variable named `container`.
const container = document.querySelectorAll('.container')[1];
container.style.backgroundColor = "royalblue";

// 6: Select all <a> elements that have a 'title' attribute.
//    Set their color value to the color of your choice.

const anchor = document.querySelectorAll('a[title]');
for(var i=0;i<anchor.length;i++)
{
	anchor[i].style.color = 'red';
}

