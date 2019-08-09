const promise = new Promise((resolve,reject)=>{
	resolve();
	reject();
});

const promise2 = new Promise((resolve,reject)=>{
	reject();
	resolve();
	
});

const promsie3 = new Promise((resolve,reject)=>{
	resolve();
	reject();
	
});

const promise4 = new Promise((resolve,reject)=>{
	resolve();
	reject();
})

promise.then(()=>{
	console.log("1 enter");
	return promise2;
}).catch(()=>{
	console.log("error 1");
	return promise2;
}).then(()=>{
	console.log("2 enter");
	return promise3;
}).catch(()=>{
	console.log("error 2");
	return promise3;
}).then(()=>{
	console.log("3 enter");
	return promise4;
}).catch(()=>{
	console.log("error 3");
	return promise4;	
}).then(()=>{
	console.log("4 enter");
}).catch(()=>{
	console.log("error 4");
});
