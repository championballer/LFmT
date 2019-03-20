const promise1 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		let randomInt = Math.floor(Math.random()*10);
		resolve(randomInt);
	},500);
});

promise1.then((randomInt)=>{
	console.log(randomInt);
	return new Promise((resolve,reject)=>{
		if(randomInt>5)
			resolve();
		else
			reject();
	});
}).then(()=>{
	console.log("2nd promise resolved");
}).catch(()=>{
	console.log("2nd promise rejected");
});