def combo(iter1,iter2):
	result = []
	for i in range(len(iter1)):
		sub_result = []
		sub_result.append(iter1[i])
		sub_result.append(iter2[i])
		result.append(tuple(sub_result))
	return result

print(combo("Hello","Shivu"))


