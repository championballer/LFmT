function some(arr,callback){
	for(var i=0;i<arr.length;i++)
	{
		if(callback(arr[i],i,arr))return true;
	}

	return false;
}

const arr = [3,4,5];
const arr2 = [1,2,4];

console.log(some(arr,(element)=>{
	return element>6;
}));

console.log(some(arr2,(element)=>{
	return element>2;
}));

