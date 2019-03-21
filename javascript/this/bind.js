let colt = {
	firstName : "Colt",
	sayHi : function (){
		setTimeout(function (){
			console.log("Hi " + this.firstName);
		}.bind(this),1000);
	}
}

let elie = {
	firstName : "Elie"
}

function addNumbers(a,b,c,d)
{
	return (this.firstName + " added " + (a+b+c+d).toString());
}

colt.sayHi();
addNumbers = addNumbers.bind(colt,2,3);

console.log(addNumbers(4,5));
