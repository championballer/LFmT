const wait = () => new Promise ((resolve,reject)=>{
	console.log("Promise entered");
	setTimeout(resolve,1000);
})

wait().then(()=>{
	console.log('I promised to run after 1s');
	return wait();
})
.then(()=>{
	console.log('I promised to run after 2s');
})