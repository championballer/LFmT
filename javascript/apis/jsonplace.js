const request = require("request");

request("https://jsonplaceholder.typicode.com/todos/1",function(error,res,body){
	if(!error && res.statusCode==200)
	{
		const parsedBody = JSON.parse(body);
		console.log(parsedBody.title);
	}
});