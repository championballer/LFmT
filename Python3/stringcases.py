def stringcases(str):
    reverse = ""
    for index in range(-1,-len(str)-1,-1):
        reverse+=str[index]
        
    result = str.lower(),str.upper(),str.title(),reverse
    return result

print(stringcases("Agrima"))