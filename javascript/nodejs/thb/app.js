const https = require('https');

const username = 'shivkumar7';

function printMessage(username,badgecount,points)
{
	const message = `${username} has ${badgecount} total badge(s) and ${points} points in javascript`;
	console.log(message);
}

//fetching the url (https://teamtreehouse.com/shivkumar7)



const request = https.get(`https://teamtreehouse.com/${username}.json`,(res)=>{
	console.log(res.statusCode);

	let body = '';
	res.on("data",(data)=>{
		body += data.toString();
	});

	res.on("end", ()=>{
        var profile = JSON.parse(body);
		console.dir(profile);
	});
});

//console.log("Printing request");
//console.dir(request);