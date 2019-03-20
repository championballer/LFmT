const promise = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		console.log("Counter : 1");
		resolve();
	},1000);
});

promise.then(()=>{	
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			console.log("Counter : 2");
			resolve();
		},2000);
	});
}).then(()=>{
	setTimeout(()=>{
			console.log("Counter : 3");
		},3000);
});
