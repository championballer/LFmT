function forEach(arr,callback){
	for(var i=0;i<arr.length;i++)
	{
		callback(arr[i],i,arr);
	}
}

let arr = ["my","forEach","Called"];

output = "";
forEach(arr,(str,index,arr)=>{
	if(index!==arr.length-1)
	{
		output+=str;
	}

	else
	{
		output+=(str+"!!!");
	}
});

console.log(output);