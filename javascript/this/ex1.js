let person = {
	firstName : "Shiv",
	sayHello : function (){
		return "Hi "+this.firstName;
	},
	determineContext : function (){
		return this===person;
	},
	dog : {
		sayHello : function (){
			return "Hi "+this.firstName;
		},
		determineContext : function (){
			return this===person;
		},
		context : this
	}

}

console.log(person.dog.context);
console.log(person.dog.determineContext());
console.log(person.dog.sayHello());
console.log(person.sayHello());
console.log(person.determineContext());