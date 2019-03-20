let i = 1;
setTimeout(()=>{
	let intervalId = setInterval(()=>{
		console.log(i);
		i++;

		if(i>10)
		{
			clearInterval(intervalId);
		}
	},1000);
},0);