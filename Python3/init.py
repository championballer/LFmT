a = int(input())
b = int(input())

arr = [int(x) for x in input().strip().split(" ")];

ans = list([])
mx = 1
for i in range(1,len(arr)):
	current=0
	for j in range(i-1,-1,-1):
		if arr[i]-arr[j]>=a:
			current = ans[j]+1
			if(current>mx):
				mx = current
	ans.append(mx)
	
print(ans[len(arr)-1])
