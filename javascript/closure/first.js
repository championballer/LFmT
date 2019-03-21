function outer(a){
	return function inner(b){
		return a+b;
	}
}

function out(a){
	return (b) => {
		return a+b;
	}
}

console.log(outer(5)(6));
console.log(out(5)(7));