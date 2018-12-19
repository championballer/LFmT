var https = require("https"); 
var username = "aletichaitanya";

https.get(`https://teamtreehouse.com/${username}.json`, res => { 

    console.log(res.statusCode); 

    var body = ''; 

    res.on("data", d => { 

        body += d.toString(); 

    }); 

    res.on("end", () => { 

        var parsing = JSON.parse(body); 
        console.dir(parsing); 

    }); 
});
