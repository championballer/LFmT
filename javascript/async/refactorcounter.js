let counter = 0;

function increment(){
	counter++;
	console.log(counter);
	return counter+1;
}

function pchain(callback,time){
	let p = new Promise(function(resolve,reject){
		setTimeout(function(){
			let res = callback();
			resolve(res);
		},time);
	});

	return p;
}

pchain(increment,1000).then(function(current){
	console.log(current);
	return pchain(increment,2000);
}).then(function(current){
	console.log(current);
	return pchain(increment,3000);
}).then(function(current){
	console.log(current);
});