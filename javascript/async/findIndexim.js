function findIndex(arr,callback){
	for(let i=0;i<arr.length;i++)
	{
		if(callback(arr[i],i,arr)===true)
		{
			console.log(i);
			return;
		}
	}

	console.log(-1);
	return;
}

let arr = [1,2,3,4,5];
let strarr = ["Java","C","C++","Python"];
findIndex(arr,(item,index,arr)=>{
	return item%2===0;
});

findIndex(strarr,(str)=>{
	return str==="Python";
})

