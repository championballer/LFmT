let promise = new Promise((resolve,reject)=>{
	reject("Error");
	resolve(5);
	
})

promise.then((data)=>{
	console.log(data);
}).catch((str)=>{
	console.log(str);
})