console.log("p1");

let p1 = new Promise(function(resolve,reject){
	console.log("p3");
	setTimeout(function(){
		console.log("p5");
		var randInt = Math.floor(Math.random()*10);
		resolve(randInt);
	},0);
});

p1.then(function(data){
	console.log(data);
});

console.log("p2")


setTimeout(function(){
	console.log("p4");
},0);
