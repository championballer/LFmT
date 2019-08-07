
let time = 10;
let v = time;


let id = setInterval(()=>{
	if(v===0)
	{
		console.log("Ring Ring Ring");
		clearInterval(id);
		return;
	}

	else
	{
		console.log(v);
		v--;
	}
},1000);