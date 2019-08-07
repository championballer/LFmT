function greet(name,formatter)
{
	console.log("Hello "+formatter(name));
}

greet("Shiv",(name)=>{
	return name.toUpperCase();
});

greet("Agrima",(name)=>{
	return name;
});

