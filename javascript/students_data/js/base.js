function print(message)
{
	document.write(message);
}

function makeMessage(student)
{
	message = "<p>";
	for(var prop in student)
	{
		if(prop==="name")
		{
			message+="<b>Student: "+student[prop]+"</b><br><br>";
		}

		else
		{
			message+=prop+": "+student[prop]+"<br>";
		}
	}
	message+="</p><br>";
	return message;
}

var students = [
	{name:"Shiv",Track:"JavaScript",Achievements:10,Points:3211},
	{name:"Agrima",Track:"JavaScript",Achievements:11,Points:3218},
	{name:"Pranav",Track:"Python",Achievements:9,Points:3111},
	{name:"Tanisha",Track:"JAVA",Achievements:10,Points:3214},
	{name:"Anshu",Track:"C++",Achievements:12,Points:3724}
];

for(var i=0;i<students.length;i++)
{
	message = makeMessage(students[i]);
	print(message);
}