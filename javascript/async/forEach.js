let arr = ["my","forEach","Call"];

let output = "";
arr.forEach((str,index,arr)=>{
	if(index!==arr.length-1)
	{
		output+=arr[index];
	}

	else
	{
		output+=(arr[index]+"!!!");
	}
})

console.log(output);