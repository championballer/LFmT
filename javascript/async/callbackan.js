function greet(val,name,formatter,key)
{
	/*
	the callback accepts 3 parameters in its function signature but only 2 are used 
	in the actual definition. So sending these two is paramount. 
	*/
	console.log("Hello "+formatter(name,val,key));
}

/*
Here greet is the higher order function which accepts the callback as a parameter
*/

greet(0,"Shiv",(name,val)=>{
	console.log(val);
	return name.toUpperCase();
});

/*
Adding a safecheck in case key is not sent as argument to the callback for not defined values.
*/

function sample(name,val){
	console.log(val);
	if(typeof key !== "undefined")console.log(key);
		
	return name.toUpperCase();
}

greet(1,"Agrima",(name,val)=>{
	console.log(val);
	return name;
});

greet(2,"Hriday",sample);

