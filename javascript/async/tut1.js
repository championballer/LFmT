function callback(){
	console.log("Callback");
}

function higherOrder(fn)
{
	console.log("Callback invoked");
	fn();
}

higherOrder(callback);