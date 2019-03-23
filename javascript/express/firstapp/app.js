const express = require('express');
app = express();

app.listen(8000,()=>{
	console.log("Server started");
});

app.get('/',function(req,res){
	res.send("Hi there\n");

})

app.get('/dog',function(req,res){
	res.send("Meow")
})

app.get('/agrima',function(req,res){
	res.send("You hot bro");
})