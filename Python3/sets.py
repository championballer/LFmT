set1 = {1,2,3,}
set2 = {2,3,}

print(set1.issuperset(set2))
print(set1>set2)
print(set2==set1)

COURSES = {
    "Python Basics": {"Python", "functions", "variables",
                      "booleans", "integers", "floats",
                      "arrays", "strings", "exceptions",
                      "conditions", "input", "loops"},
    "Java Basics": {"Java", "strings", "variables",
                    "input", "exceptions", "integers",
                    "booleans", "loops"},
    "PHP Basics": {"PHP", "variables", "conditions",
                   "integers", "floats", "strings",
                   "booleans", "HTML"},
    "Ruby Basics": {"Ruby", "strings", "floats",
                    "integers", "conditions",
                    "functions", "input"}
}

def covers(set):
	result = []
	for item in COURSES:
		if not COURSES[item].isdisjoint(set):
			result.append(item)
	return result

def covers_all(set):
	result = []
	for item in COURSES:
		if COURSES[item]>=set:
			result.append(item)
	return result

print(covers({"Python"}))
print(covers_all({"variables","integers"}))