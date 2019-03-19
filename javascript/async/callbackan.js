function greet(name,formatter)
{
	return "Hello "+formatter(name);
}

console.log(greet("Shiv",(name)=>{
	return name.toUpperCase();
}));

console.log(greet("Agrima",(name)=>{
	return name;
}));

