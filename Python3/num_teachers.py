def num_teachers(dict):
	return len(dict.keys())

def num_courses(dict):
	total_courses=0
	for teacher in dict:
		total_courses+=len(dict[teacher])
	return total_courses

def courses(dict):
	course_list = []
	for teacher in dict:
		course_list+=dict[teacher]
	return course_list

def most_courses(dict):
	max_teacher = ""
	max_value = 0
	for teacher in dict:

def stats(dict):
	result = []
	for teacher in dict:
		sub_list = []
		sub_list.append(teacher)
		sub_list.append(len(dict[teacher]))
		result.append(sub_list)
	return result

print(num_courses({'Andrew Chalkley': ['jQuery Basics', 'Node.js Basics'],
  'Kenneth Love': ['Python Basics', 'Python Collections']}))