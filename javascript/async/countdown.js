function countDown(interval)
{
	let i = 1;
	intervalId = setInterval(()=>{
		if(i!==interval)
		{
			console.log("Timer: ",i);
			i++;
		}

		else
		{
			console.log("Ring Ring Ring!!!");
			clearInterval(intervalId);
		}
	},1000);
}

countDown(3);

