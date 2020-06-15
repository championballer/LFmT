let intervalId = setTimeout(()=>{
	console.log("30 secs");
},30000);


/*
This is another interval based function which executes the callback after 2 secs, 
and contains the command to clear timeout from the stack. 
*/

setTimeout(()=>{
	console.log("clearing timeout");
	clearTimeout(intervalId);
},2000);



