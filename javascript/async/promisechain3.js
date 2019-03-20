const promise = new Promise((resolve,reject)=>{
	resolve();
});

promise.then(()=>{
	let i = 1;
	console.log(i);
	return i;
}).then((i)=>{
	console.log(i);
	return i*2;
}).then((i)=>{
	console.log(i);
	return i+2;
}).then((i)=>{
	console.log(i);
})