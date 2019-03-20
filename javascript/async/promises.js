// const promise = new Promise((resolve,reject)=>{
// 	resolve();
// });

// const promise2 = new Promise((resolve,reject)=>{
// 	reject();
// });

// let i = 3;

// const promise3 = new Promise((resolve,reject)=>{
// 	if(i%2===0)resolve();
// 	else reject();
// });

let arr = ["this","is","us"];
const promise4 = new Promise((resolve,reject)=>{
	console.log("Promise entered");
	arr.forEach((element)=>{
		console.log(element);
	})
	setTimeout((data)=>{
		console.log("Set timeout entered");
		let randomInt = Math.floor(Math.random()*10);
		resolve(randomInt);
	},1000);
});

let buffer = () => {
	console.log("Buffer entered");
	setTimeout(()=>{
		console.log("Buffer's timeout entered");
	},1000);
	//console.log("Buffer exited");
}

// promise.then(()=>{
// 	console.log("Hello world");
// });

// promise2.catch(()=>{
// 	console.log("Error");
// });

// promise3.then(()=>{
// 	console.log("This is resolved");
// }).catch(()=>{
// 	console.log("Error reached");
// });

promise4.then((randomInt)=>{
	console.log("Promise resolution enetered", randomInt);
});
console.log("Hello World");
buffer();
