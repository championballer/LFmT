function findIndex(arr,callback)
{
	for(let i=0;i<arr.length;i++)
	{
		if(callback(arr[i],i,arr))
		{
			return i;
		}
	}

	return -1;
}

const arr = [1,2,3,4];

console.log(findIndex(arr,(element)=>{
	if(element%2===0)
		return true;
	else return false;
}));