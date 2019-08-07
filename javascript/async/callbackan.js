function greet(val,name,formatter)
{
	console.log("Hello "+formatter(name,val));
}

greet(0,"Shiv",(name,val)=>{
	console.log(val);
	return name.toUpperCase();
});

function sample(name,val){
	console.log(val);
	return name.toUpperCase();
}

greet(1,"Agrima",(name,val)=>{
	console.log(val);
	return name;
});

greet(2,"Hriday",sample);

