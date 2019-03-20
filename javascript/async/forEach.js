const arr = ["for","Each","Used"];

let output = "";

arr.forEach((str,index,arr)=>{

	if(index===arr.length-1)
	{
		output+=(str+"!!!");
	}

	else
	{
		output+=str;
	}
})

console.log(output);