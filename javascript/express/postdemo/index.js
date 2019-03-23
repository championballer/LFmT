const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/",function(req,res){
	res.render("home.ejs");
});

app.post("/addFriend",function(req,res){
	res.send("Friend addition request receieved");
});

app.get("/friends",function(req,res){
	let friends = ["Pranav","Abhay","Agrima","Tanvi","Apoorva"];
	res.render("friends.ejs", {friends:friends});
});

app.listen("8000",function(){
	console.log("Server started");
});