const section = document.querySelector('section');
let paragraphs = section.children;

for(let i=0;i<paragraphs.length;i++)
{
	paragraphs[i].style.color = 'blue';
}