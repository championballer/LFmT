def combiner(list):
	string = ""
	add = 0
	for item in list:
		if isinstance(item,(int,float)):
			add+=item
		else:
			string+=item
	string += (""+str(add))
	return string

print(combiner(["apple", 5.2, "dog", 8]))