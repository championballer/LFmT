function filter(arr,callback)
{
	let newArr = [];
	for(let i=0;i<arr.length;i++)
	{
		if(callback(arr[i],i,arr))
		{
			newArr.push(arr[i]);
		}
	}

	return newArr;
}

let arr = [1,2,3,4,5,6];
arr = filter(arr,(value)=>{
	return value>4;
});

console.log(arr);