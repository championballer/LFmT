def first_4(items):
    return items[:4]

def first_and_last_4(items):
    sublist1 =  items[:4]
    sublist2 = items[-1:-5:-1]
    return sublist1+sublist2

def reverse_evens(items):
    rev =  items[-1::-2]
    return rev

def sillycase(string):
    mid = len(string)//2
    string[:mid] = string[:mid].lower()
    string[mid:] = string[mid:].upper()
    return string
    
print(reverse_evens([1,2,3,4,5,6,7,8,9]))
print(sillycase("treehouse"))