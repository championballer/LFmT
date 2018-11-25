name = input("Hello, what is your name?")

con = input(("{},Do you understand Python while loops?\nEnter yes/no:").format(name))

while con=="no":
	print(("Ok, {}, while loops in pyhton repeat as long as a certain Boolean condition is not met").format(name))
	con = input(("{},Do you understand Python while loops?\nEnter yes/no:").format(name))

print("Thats great")