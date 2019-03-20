const arr = [1,2,3];

// const timeoutId = setTimeout(()=>{
// 	arr.forEach((element)=>{
// 		console.log(element);
// 	});
// },0);
// console.log(timeoutId);

let i = 0;

const intervalId = setInterval(()=>{
	arr.forEach((element)=>{
		console.log(element);
	});

	i++;

	if(i==3)
	{
		clearInterval(intervalId);
	}
},1000);

