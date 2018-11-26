var questions = [["What is the capital of India","New Delhi"],["Who is the prime minister of India","Narendra Modi"],["What is the number of states in India","29"],["Who is the captain of the Indian Cricket Team","Virat Kohli"]];

var correctNum = 0;
var correct = [];
var wrong = [];

for(var i=0;i<questions.length;i++)
{
	var ans = prompt(questions[i][0]);
	if(ans===questions[i][1])
	{
		correct.push(questions[i][0]);
		correctNum+=1;
	}

	else
	{
		wrong.push(questions[i][0]);
	}
}

document.write("<h2>Questions</h2>");
for(var i = 0;i<questions.length;i++)
{
	document.write("<p>"+questions[i][0]+": "+questions[i][1]+"</p>");
}

document.write("<h2> Correctly answered questions</h2>")
for(var i=0;i<correct.length;i++)
{
	document.write("<p>"+correct[i]+"</p>");
}

document.write("<h2> Wrongly answered questions</h2>")
for(var i=0;i<wrong.length;i++)
{
	document.write("<p>"+wrong[i]+"</p>");
}