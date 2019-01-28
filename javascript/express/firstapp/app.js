const express = require('express');
app = express();

app.listen(3000,function(){
	console.log("Server Started");
})

app.get('/',function(req,res){
	res.send("Hi there");
})

app.get('/dog',function(req,res){
	res.send("Meow")
})

app.get('/agrima',function(req,res){
	res.send("You hot bro");
})