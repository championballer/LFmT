messy_list = ["a", 2, 3, 1, False, [1, 2, 3]]

# Your code goes below here

messy_list.insert(0,messy_list.pop(3))

for item in messy_list.copy():
   	if not isinstance(item,int) or isinstance(item,bool):
   		messy_list.remove(item)

print(messy_list)