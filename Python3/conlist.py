import os 

grocery_list = []

def clear_screen():
	os.system("cls" if os.name=="nt" else "clear")

def print_list():
	clear_screen()
	if len(grocery_list)==0:
		print("No elements to print")
		return
	for index,item in enumerate(grocery_list):
		print("{} : {}".format(index+1,item))

def swap():
	index1 = int(input("Index to swap at(0 indexing):"))
	index2 = int(input("Index to swap with(0 indexing):"))
	temp = grocery_list[index1]
	grocery_list[index1] = grocery_list[index2]
	grocery_list[index2] = temp


def show_help():
	print("Please enter the item to buy (will be inserted at the end):")
	print("In case you're done adding items, enter \" DONE\"")
	print("In case you need this help, enter \"HELP\"")
	print("In case you want to remove some item from the list, enter \"DEL\"")
	print("In case you want to see the list, enter \"PRINT\"")
	print("In case you want to see the len of the list, enter \"LEN\"")
	print("In case you want to clear screen, enter \"CLEAR\"")
	print("In case you want to insert element at any specific index of the list, enter \"INS\"")
	print("In case you want to swap items, enter \"SWAP\"")

def del_mech():
	if len(grocery_list)==0:
		print("No items to delete")
		return
	print_list()
	print("Please enter the index number of the item to delete:")	
	index = int(input(">>"))
	del grocery_list[index-1]
	print_list()

def add_item(item):
	if len(item)==0:
		print("You entered an empty string, that is not eligble input, type help for more info")
		return
	grocery_list.append(item)
	print(("{} was added to the list and the length of the list is {}").format(item,len(grocery_list)))
	print_list()

def insert_index():
	
	try:
		index = int(input("Please enter the index you want to insert the element at:"))
		if index<0:
			raise ValueError("Negative values are not allowed")
	except ValueError as err:
		print(("{}").format(err))
	else:
		item = input("Please enter the item you want to insert:")
		grocery_list.insert(index-1,item)
		print(("{} was added to the list and the length of the list is {}").format(item,len(grocery_list)))
		print_list()

show_help()

while True:
	new_item = (input(">>")).lower()
	if new_item == "done":
		break;
	elif new_item == "help":
		show_help()
	elif new_item == "del":
		del_mech()
	elif new_item == "print":
		print_list()
	elif new_item == "len":
		print(len(grocery_list))
	elif new_item == "clear":
		clear_screen()
	elif new_item == "ins":
		insert_index()
	elif new_item == "swap":
		swap()
	else:
		add_item(new_item)

print_list(grocery_list)
#print(grocery_list)