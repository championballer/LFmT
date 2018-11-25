import math

def checkpl(total,num):
	if num<=1:
		raise ValueError("Invalid value")
	return math.ceil(total/num)


try:
	total = float(input("Please enter value to split on:"))
	num = int(input("Please enter the number of people to split the amount between:"))
	print(checkpl(total,num))
except ValueError as err:
	print("You entered wrong value son")
	print("{}".format(err))
	