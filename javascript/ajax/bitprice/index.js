let btn = document.querySelector("#btn");
let span = document.querySelector("#price");

const XHR2 = new XMLHttpRequest();
XHR2.open("GET","https://api.coindesk.com/v1/bpi/currentprice.json");
XHR2.send();
XHR2.onreadystatechange = () => {
		if(XHR2.readyState===4 && XHR2.status===200)
		{
			let responseObject = JSON.parse(XHR2.responseText);
			let rate = responseObject["bpi"]["USD"]["rate"];
			span.innerText = rate;
		}
	};


btn.addEventListener("click",()=>{
	const XHR = new XMLHttpRequest();
	XHR.open("GET","https://api.coindesk.com/v1/bpi/currentprice.json");
	XHR.send();

	XHR.onreadystatechange = () => {
		if(XHR.readyState===4 && XHR.status===200)
		{
			let responseObject = JSON.parse(XHR.responseText);
			let rate = responseObject["bpi"]["USD"]["rate"];
			console.log(rate);
			span.innerText = rate;
		}
	};
});