// 1: Set the text of the <h1> element
const header = document.querySelector('h1');
header.textContent = 'Exercise File';

// 2: Set the color of the <h1> to a different color
header.style.color = 'red';

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const desc = document.querySelector('.desc');
desc.innerHTML = 'This is an <b>exercise</b> file';

// 4: Set the class of the <ul> to 'list'
const list = document.querySelector('ul');
list.className = 'list';

// 5: Create a new list item and add it to the <ul>
const li = document.createElement('l1');
li.innerHTML = '<input> Movies';
list.appendChild(li);

// 6: Change all <input> elements from text fields to checkboxes
const input = document.querySelectorAll('input');
for(var i=0;i<input.length;i++)
{
	input[i].type = 'checkbox';

}

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
const button = document.createElement('button');
button.textContent = 'Delete'
const div = document.querySelector('.extra');
div.appendChild(button);

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button

button.addEventListener('click',() => {
	const body = document.querySelector('.container');
	body.removeChild(div);
});
