def combiner(arguments):
    result = ""
    summation = 0
    
    for item in arguments:
        if isinstance(item,(int,float)):
            summation+=item
        else:
            result+=item
            
    result+=str(summation)        
    return result

print(combiner(["apple", 5.2, "dog", 8]))