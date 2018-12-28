from flask import Flask 
from flask import request

app = Flask(__name__)

def helper(name="Shiv"):
	name = request.args.get('name',name)
	return "Hello {}".format(name)

#Decorator	
@app.route('/')
def func(name="Shiv"):
	return helper("Agrima")
	#name = request.args.get('name',name)
	#return "Hello from {}, this is sample".format(name)

app.run(debug=True,port=8000)