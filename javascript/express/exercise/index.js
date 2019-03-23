const express = require("express");

const app = express();


app.get("/",function(req,res){
	res.send("Hi there, welcome to my assignment");
});

app.get("/speak/:animal",function(req,res){
	let animal = req.params.animal;
	let sound;
	if(animal==="pig")
	{	
		sound = "Oink";
	}

	else if(animal==='cow')
	{
		sound = "Moo";
	}

	else
	{
		sound = "Woof woof";
	}

	res.send("The "+animal+" says "+sound);
});

app.get("/repeat/:text/:times",function(req,res){
	let text = req.params.text;
	let times = parseInt(req.params.times);

	let result = "";
	for(let i=0;i<times;i++)
	{
		result+=(text+" ");
	}

	res.send(result);
});

app.get("*",function(req,res){
	res.send("Sorry, page not found.");
});

app.listen("8000",function(){
	console.log("Server Started");
});

