name = input("Please enter your name:")
number = int(input("Please enter a number:"))

print(name)
print(number)

isFizz = number%3==0
isBuzz = number%5==0

if isFizz and isBuzz:
	print("FizzBuzz number")
elif isFizz:
	print("Fizz number")
else:
	print("Buzz number")
