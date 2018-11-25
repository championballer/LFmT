print("hello world",end=" ")
print("")

first_name = input("Please enter your name:")
print("Hello",first_name)

subject_template = "Thanks for learning {} with us, {}"
print(subject_template.format("Javascript","Shiv"))

is_smoker = False
has_kids = False

print(not has_kids and not is_smoker)

if not is_smoker==True:
	print("Hello smoker")