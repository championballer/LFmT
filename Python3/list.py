list1 = [1,2,3]
list2 = ["Python","Javascript","Java"]
print(list1[1])
print(list2[1])

len(list2)

con = bool([2,3])
print(con)

con2 = bool([])
print(con2)

for i in list1:
	print(i)

banner = list("Congratulations")
print(banner)

#Lists can store any data type and its not necessary for them to be same.
#We can store numbers and strings togeher for example.
#Lists are mutable meaning they can be changed and we are changing the same list, i.e.
#we are not returned a new list
#Strings are immutable and whenever we append something to it. We did not add it to 
#the same list rather we are returned a new string altogether.

list3 = [1,"Hello"]
print(list3[1])

temperature  = []
temperature.append(2)
print(temperature)

temperature.append(list3)
print(temperature)

for each in list3:
	temperature.append(each)

print(temperature)

temperature2=[]
temperature2.extend(temperature)
print(temperature2)

temperature  = temperature + temperature2
print(temperature)

temperature2*=2
print(temperature2)
samplestr = "Hello everyone"

print(samplestr[0])

# list4 = []
# list4+3

# print(list4)

newlist = [2,3,4,5,]

newlist.insert(3,-1)

print(newlist)

var = newlist.pop()

print(var)
print(newlist)

#var2 = del newlist[2]

sample = ["Hello","I","am","Shiv"]

print(",".join(sample))