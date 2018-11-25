#Packing and unpacking of dictionaries

def packing(**kwargs):
	print(kwargs)

def unpacking(dict):
	print("{first_name}".format(**dict))

packing(first_name="Shiv", last_name="Kumar")
unpacking({"first_name":"Shiv","last_name":"Kumar"})