const express = require("express");

const app = express();

app.get("/",function(req,res){
	let posts = [
		{
			title:"Hello world",
			author:"Shiv Kumar"
		}
	];
	res.render("home.ejs",{posts:posts});
})



app.listen("8000",function(){
	console.log("Server started");
});

