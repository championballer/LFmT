function sendMessage(message,callback){
	return callback(message);
}

function alert(message){
	console.log(message);
}

sendMessage("Console.log",console.log);
sendMessage("Alert",alert);

let answer = sendMessage('Saveme',alert);

answer;