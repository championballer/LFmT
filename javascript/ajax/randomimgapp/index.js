// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let btn = document.querySelector("#btn");
let img = document.querySelector("#photo");
btn.addEventListener("click",()=>{
	const XHR = new XMLHttpRequest();

	XHR.onreadystatechange = () => {
	if(XHR.readyState===4)
		{	
			if(XHR.status==200)
			{
				let responseObject = JSON.parse(XHR.responseText);
				let url = responseObject.message;
				console.log(url);
				img.src = url;
			}
				
		}
	};

	XHR.open("GET","https://dog.ceo/api/breeds/image/random");
	XHR.send();
});