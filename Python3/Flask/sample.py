from flask import Flask 
from flask import request
from flask import render_template

app = Flask(__name__)

def helper(name="Agrima"):
	name = request.args.get('name',name)
	return "Hello {}".format(name)


@app.route('/multiply/<int:num1>/<int:num2>')
def multiply(num1,num2):
	return str(num1*num2)    

@app.route('/add/<int:num1>/<int:num2>')
@app.route('/add/<float:num1>/<float:num2>')
@app.route('/add/<int:num1>/<float:num2>')
@app.route('/add/<float:num1>/<int:num2>')
def add(num1,num2):
	return render_template('add.html',num1=num1,num2=num2)
#Decorator	
@app.route('/')
def func(name="Shiv"):
	return helper()
	#name = request.args.get('name',name)
	#return "Hello from {}, this is sample".format(name)

app.run(debug=True,port=8000)