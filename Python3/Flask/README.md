This readme summarises the basic syntax related to Flask. Its a microframework to make websites. 

To use, it first needs to be installed in the system. We install it a conda environment using pip. It allows us to have it in a virtual environment so that dependency conflict can be avoided as much as possible.

The flask script is called an app. The app is what receieves the requests, which then sends the request to the appropriate function or view (A view is a function that returns an HTTP response. This response has to be a string but can be any string you want.) based on the route (A route is the URL path to a view. They always start with a forward slash / and can end with one if you want) mentioned, from where the function or view(referred from here), sends back a response which could be an html, json or xml. This is the request-response cycle.

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

It is important to be able to access variables from a request or in general in web development. One method to do the same is through the query string (The string after the ? in the URL). We can access the arguments through the request object(global object that needs to be imported separately) using the args dictionary and the .get method. The URLs can get pretty ugly, hence we need to clean them. 

```python
from flask import request

@app.route('/')
def index(name="Shiv"):
	name = request.args.get('name',name)
	return "Hello {}".format(name)
```

_We can also work with redirection in views as normal functions work._\
_Views can have multiple routes_


```python
@app.route('/add/<int:num1>/<int:num2>')
@app.route('/add/<float:num1>/<float:num2>')
def add():
	return "{} + {} = {}".format(num1,num2,num1+num2)
```
Anything captured in a route argument will be a string unless we specify another type, so be careful with how you use the values. You can have multiple route arguments, too.

Working with plain string is okay, but we want to be able to send in html code that can be rendered by the browser and that is done using render_template object imported from flask. The template needs to be in the template folder that is in the local project directory. It is also possible to work with triple quotes instead of the template as triple quotes allow line breaks in the string, and hence html can be typed into it.

```python
from flask import render_template

@app.route('/add/<int:num1>/<int:num2>')
def index(num1=5,num2=5):
	return render_template('add.html',num1=num1,num2=num2)
```

The arguments to the function after the path to the template file is in the form of key value pairs and hence expanded dictionary can also be sent here(\*\*args). To create placeholders for these arguments we need to use {{}} in the template, since Flask using Jinja2, and their templating works like this.

We can avoid writing a lot of repetitive code in templates used in flask rendering by using template inheritance.  

```html
<--
layout.html
-->
<!doctype html>
<html>
<head><title>{%block title%} Flask Tutorials {%endblock%}</title></head>
<body>
{%block content%}{%endblock%}
</body>
</html>
```

```html
<--
index.html
-->
{%extends 'layout.html' %}

{%block title%} Main | {{super()}}{%endblock%}
{%block content%} Hello {{}} {%endblock%}
```
Three main inheritance tags perse are {%block%} (needs to be closed as done above), {%extends%} in the extending document with base template as parameter. We can mention default content for blocks which will be used in case we donot specify something for the area in the extending template. There is a way to access this in case overriding, {{super()}}.

We can include CSS, Javascript and Image files by referring to them in the templates files in the /static folder. Flask provides us the convenience to refer to the static folder of the project using /static. They can be added to inheriting templates as required. Normal rules apply here as well. 

Working with forms in flask. url_for(view name)(needs to imported from flask) gives the URL for the view and this can be used to access that view post a redirect or a form action. 

```html
<form action={{url_for('save/')}} method='POST'>
```

And also we might need to redirect post some action hence we need to import too. We also need to mention at the view for which methods its fetching is allowed. All others will be not allowed.

```python
@app.route('save/',methods=['POST'])
def save():
	return redirect(url_for('index'))
```

The data from the request that is sent from the form is in request.form data structure which happens to be a immutablemultidict.

Cookies is a way of storing data b/w requests.  It can be used to store data our users submit to the form. It can also be defined as the bits of data that our browser lets site store on our computer. Here we store in json format(need to import json for this, use of .loads() and .dumps()) . The thing about cookies in Flask is that it is set on response and we till now we did not generate a response till return. So we need to generate a false response to set our cookie on and that is done using make_response (generates the entire response object that will be sent back to the client, but lets us store it in a variable for further manipulation like seting a cookie here). The arguments to the make_response is the original returned string. Once the response object is there then we can set cookie using set_cookie(). Here the arguments are the cookie name and its value. We use json.dumps(dict(request.form.items())) here as the value which will be stored in data cookie which will be extracted back to be used in index using the get_saved_data function and the character_name label will already be set if already set by the user.
To get access to the character cookie we use the request.cookies.get(cookie name) function. The data comes out as output by json.loads which is fed the data as stored in the cookie. The dict key will be the name of the input tag in the index.html and we need to store that in the value attribute in our main html file. as in value = {{saves.get('name','')}}
Also here we are checking if the cookie is already present or not since we donot want to overwrite the entire data point, but rather only change the updated values and that is what is happening here and that is a good practice in general.


```python

def get_saved_data():
	try:
		data = json.loads(request.cookies.get('character'))
	except TypeError:
		data = {}
	return data

def index():
	data = get_saved_data()
	return render_template('index.html',saves=data)

def save():
	response = make_response(redirect(url_for(index)))
	data = get_saved_data()
	data.update(dict(request.form.items()))
	response.set_cookie('character',json.dumps(data))
	return response
```

We can include python code templates in html. 

```python
{% for color in options['colors']%}
<input type="radio" id="{{color}}" name="colors" value="{{color}}" {%if saves.get('colors') == color %} checked{%endif%}>
<label for="{{color}}"></label>
{% endfor %}
```

{% for x in y %}: This is the template version. This will cause the enclosed code to be run as many times as there are things in y. Has to be followed by {% endfor %}.

{% if %}: The template version of Python's if condition. Closed with {% endif %}.