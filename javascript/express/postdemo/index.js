const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
let friends = ["Pranav","Abhay","Agrima","Tanvi","Apoorva"];

app.use(express.static("public"));

app.get("/",function(req,res){
	res.render("home.ejs");
});

app.post("/addFriend",function(req,res){
	friends.push(req.body.friendName);
	res.redirect("/friends");
});

app.get("/friends",function(req,res){
	
	res.render("friends.ejs", {friends:friends});
});

app.listen("8000",function(){
	console.log("Server started");
});