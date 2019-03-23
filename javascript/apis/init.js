const request = require("request");

request("https://www.google.com",function(error,res,body){
	if(!error && res.statusCode==200)
	{
		console.log(body);
	}
});