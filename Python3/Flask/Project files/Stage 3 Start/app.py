import json
from flask import Flask 
from flask import (render_template,url_for,redirect,
	make_response,request)

app = Flask(__name__)

def get_saved_date():
	try:
		data = json.loads(request.cookies.get('character'))
	except TypeError:
		data = {}
	return data

@app.route('/')
def index():
	data = get_saved_date()
	return render_template('index.html',saves=data)

@app.route('/save',methods=['POST'])
def save():
	response = make_response(redirect(url_for('index')))
	data = get_saved_date()
	data.update(dict(request.form.items()))
	response.set_cookie('character',json.dumps(data))
	return response

app.run(debug=True,port=8000)