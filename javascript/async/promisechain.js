const promise = new Promise((resolve,reject)=>{
	resolve();
	reject();
});

const promise2 = new Promise((resolve,reject)=>{
	reject();
	resolve();
	
});

const promsie3 = new Promise((resolve,reject)=>{
	reject();
	resolve();
});

promise.then(()=>{
	console.log("1 enter");
	return promise2;
}).catch(()=>{
	console.log("error 1");
}).then(()=>{
	console.log("2 enter");
	return promise3;
}).catch(()=>{
	console.log("error 2");
}).then(()=>{
	console.log("3 enter");
}).catch(()=>{
	console.log("error 3");
});
