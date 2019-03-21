function map(arr,callback){
	let newArr = [];
	for(let i = 0;i<arr.length;i++)
	{
		newArr.push(callback(arr[i]));
	}

	return newArr;
}

function double(element){
	return element*2;
}
let arr = [2,4,6];

console.log(map(arr,double));