let btn = document.querySelector("#btn");
let email = document.querySelector("#email");
let city = document.querySelector("#city");
let avatar = document.querySelector("#avatar");
let fullname = document.querySelector("#fullname");
let username = document.querySelector("#username");

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
	let current = data.results[0];
	email.innerText = current.email;
	city.innerText = current.location.city;
	avatar.src = current.picture.medium;
	fullname.innerText = current.name.first + " " +current.name.last;
	username.innerText = current.login.username;

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