let btn = document.querySelector("#btn");

function handleErrors(res){
	if(!res.ok)
	{
		throw Error(res.status);
	}

	return res;
}

function parseJSON(res)
{
	return res.json();
}

function updateProfile(data)
{
	console.log(data);
}

function printError(error)
{
	console.log(error);
}

btn.addEventListener("click",()=>{
	fetch("https://randomuser.me/api")
	.then(handleErrors)
	.then(parseJSON)
	.then(updateProfile)
	.catch(printError);
});