let btn = document.querySelector("#btn");
let span = document.querySelector("#price");

btn.addEventListener("click",()=>{
	let responseObject;
	fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then((res)=>{
		return res.json();
	}).then((data)=>{
		let rate = data["bpi"]["USD"]["rate"];
		span.innerText = rate;
	});	
});