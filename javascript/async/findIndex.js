let arr = [1,2,3,4];

console.log(arr.findIndex((element)=>{
	if(element%2===0)
		return true;
	else return false;
}));

