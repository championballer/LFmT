This readme summarises the basic syntax related to Flask. Its a microframework to make websites. 

To use, it first needs to be installed in the system. We install it a conda environment using pip. It allows us to have it in a virtual environment so that dependency conflict can be avoided as much as possible.

The flask script is called an app. The app is what receieves the requests, which then sends the request to the appropriate function or view based on the route mentioned, from where the function or view(referred from here), sends back a response which could be an html, json or xml. This is the request-response cycle.

To use flask, we need to import it as follows:
```python
from flask import Flask
```

Then we make an instance of an app using the current namespace. 

```python
app = Flask(__name__)
```

Once the instance is made, we can go ahead and run the app using app.run. It takes some options, that include Debug and port alongwith host to know where to send the request to for the app. For local servers we can use the port only. The debug option is for the server to restart automatically if it detects change in the file. 
Initially it would give a 404, since no route and a function is defined for the address. But we can do that by defining a function and decorating it with app.route('/'), any apt routing address from where it calls the function once the address is hit. 

```python
@app.route('/')
def index():
	return "Hello from Shiv"

app.run(debug=True, port=8000)
```


