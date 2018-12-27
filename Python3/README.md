# python3

This repository contains code written while picking up python. It will contain major components that go into learning a general purpose language and this readme is supposed to act like a cheatsheet to remember the important as well as unique components of python that will enable picking and repicking it in very efficient manner.

Functions with an interpreter and hence does not need the entire program to be compiled and checked for errors before running. Runs line by line. 

## Basics

1. No variable type declaration. Naming conventions are similar to those in another languages.

2. REPL(Read, Evaluate, Print, Loop), Python Shell : Can be used to test output for certain commands and for certain input and output cases. Read the line, Evaluate it, Print the result, and then iterate for further commands. 

3. Printing is done using print(), multiple strings can be passed; end ="\n" can also be included as an argument to move to next line post printing. 

4. Quotes usage is normal.  Escape characters also available.

5. Snakecase while naming variables. my_name

6. input(prompt) is used to take in input and accepts string by default. 

7. There is an issue with floating point number representation and computation in python.  

8. Conditions(elif)(uses literals for logical operators, i.e. and,or, not), loops(while, for, for each(iteration should occur over iterable objects)) and functions(``def function_name(parameters)``) don't operate with brackets, rather with indentation. 

9. Strings are immutable. len(string) used to find length of string. += can be used for string concatenation and \*= can be used to duplicate the string 'n' times. Everything we create in python is an object (`global class`) and the variables are references to these objects. str, int, bool all are descendents of object global class. They have specific methods and data members.
  a) str.upper() - doesn't change the string rather returns a string instead. 
  b) str.title()
  c) str(42) - "42"
  d) string formatting : You can add placeholders in strings and they can be provided later.

```python
  		subject_template = "My name is {}"
  		subject_template.format("Shiv")
```

  e) "ham" in "hamster" - True(Bool work in title case)
  f) ascii maters in string comparisons.



10.  importing libraries - import module name. To use a member function or variable of the module, we use the dot notation. Famous examples are math, pandas, numpy, etc. 
11. Random library can be used to generate random values in python.
12. Error handling : 
```python
		try:
			Error prone scope
		except Value Error as err #(We use the type of error in place of the Value error and the error message if provided with raised error is stored in err(can be omitted)):
			#Code to work when error occurs
		else:
			#Code to work when the error does not occur (not necessary since it can be provided in the scope part itself but is better for good understanding of code)
```
Multiple except blocks can be used to handle different types of errors post the try block.
	Raising erros: 

```python
	if num<=1:
		raise Value Error("") #(Msg which will be stored in err)
```

## Lists

1. Can be created using [] brackets and being assigned to a variable. Flexible with the type of objects it can store. Mutable i.e. changes can be made to the array itself rather than requiring to make a new array and then assigning it to the old variable which happens in case of immutable objects. Normal indexing. Negative indexing allows reverse indexing. 

2. append method can be used to add object to the end of the list. 



## Dunder Main (\_\_main\_\_) 

Double underscore (method name) double underscore - adopted by community as dunder.

__\_\_name\_\_ is a built-in variable which evaluates to the name of the current module.__ Since there is no main() function in Python, when the command to run a python program is given to the interpreter, the code that is at level 0 indentation is to be executed. However, before doing that, it will define a few special variables. \_\_name\_\_ is one such special variable. If the source file is executed as the main program, the interpreter sets the \_\_name\_\_ variable to have a value “\_\_main\_\_”. If this file is being imported from another module, \_\_name\_\_ will be set to the module’s name.

The sequence in which code is written in a scrippting language like python is quite important, including the code that is imported. Since all code in files imported and the source file is run by default. We can use \_\_main\_\_ to check if the file is being run as a source file or as a library and accordingly work around functions. 

## OOP

1. Everything in python is an object. Integer, strings, functions, etc., all are objects. The keyword for class is class as def is for functions. The same verb, adjectives, principle for classes, and how classes are blueprints. Example can be of student. An object can also be referred to as an instance of the class.

2. Class names are camel case with the first letter of the entire variable as capital.
3. dot notation to access members of a class. 
4. Also class and instance are responsible for their own variables. For example

```python
class Thief:
	sneaky = True

shiv = Thief()
print(shiv.sneaky) #True	
print(Thief.sneaky) #True
shiv.sneaky = False 
print(Thief.sneaky) #True
print(shiv.sneaky) #False
``` 

5. Also till the instance does not act on its attribute pre defined in class, till then the class variable has a control on the values, and it loses control post the first access.

```python
shiv = Thief()
hriday = Thief()

shiv.sneaky = True
Thief.sneaky = False
print(shiv.sneaky) #True - Thief class lost control
print(hriday.sneaky) #False - Thief class has control
```

6. instances of a class can be deallocated using del keyword.

7. While defining methods in a class. If it doesn't have self as an argument, then it can only be called by the class object. and if self is mentioned as a parameter. Then the instance can be used to access the method directly and if we want to access the method using the class variable then we need to pass an instance as argument. self is used to refer to the current instance like this in other languages. 

```python
class Thief:
	sneaky = True

	def pickpocket():
		print('Yay')

	def sample(self):
		print('sample')
```

8. All of the same rules apply to method arguments as they do to function arguments, with the exception that the first argument has to represent the instance. We can use default values, \*args, and \*\*kwargs.

9. \_\_init\_\_ is the constructor in python. Hence can be used as initializer and is called by default.
10. setattr() is a function that accepts three parameters: object, attribute and its value, and works accordingly. It can be used to map the kwargs properly in the object without requiring us to do anything manually by running a loop over kwargs. 

```python
def __init__(self,name,**kwargs):
	self.name = name
	for key,value in kwargs.items():
		setattr(self,key,value)
```

11. There is another method of updating attributes that uses \_\_dict\_\_. dict is a dictionary represntation of all the writable attributes of the object. But is advised not to use it since dict is supposed to be used as readonly. That is, use with caution.

```python
self.__dict__.update(kwargs)
```
### Inheritance
1. Every class extends from a built in class called object. In legacy python, this had to be specified specifically but that is not the case anymore. 
2. We inherit a class to another by passing it as argument as the child's class definition. 

```python
class Thief(Character):
```

3. We override functions in our child class and can call the code of the super class using super() method. Sub classes donot need to have the same function defintion as their parent counterparts.

4. Method Resolution Order(MRO) : dictates in what order the super classes will be searched for an attribute or method when a child class calls for it. Its a depth first search, from left to right. Object is the global superclass, and providing super in all classes is not a big issue.

5. Sometimes it happens that MRO breaks down and is not able to pass variables to super or child classes properly. It is better to pass them explicitly and not with \*args. 

### Internal methods
1. isinstance('a',(str,bool,dict)) -> False, will return True if any one satisfies the condition (Searches the entire family tree)
2. issubclass(bool,int) -> True

```python
issubclass(Thief,Character) #->True
```

3. type(object) tells the parent of the object. Using .\_\_name\_\_ returns the name of the class the instance belongs to. 
4. \_\_class\_\_ returns the class which the instance belongs to whereas the \_\_name\_\_ attribute returns the class name.

5. There are other internal methods in python that are automatically available like \_\_str\_\_ which is the representation of the object when print is called. \_\_repr\_\_ to have the formal, real representation of the object and \_\_int\_\_ and \_\_float\_\_ to have the respective representations of the object. Can be worked on with something like NumString. To work with computation on a class, we need to define the arithmetic operations on it. 

```python
class NumString:
	def __init__(self,value):
		self.value = value
	def __str__(self):
		return str(self.value)
	def __int__(self):
		return int(self.value)
	def __float__(self):
		return float(self.value)
```

```python
	def __str__(self):
		return "{}:{}".format(self.__class__.__name__,self.name)
```

6. ```Emulating Numeric Types:```There are internal methods specified to add arithmetic operations to our classes. That include \_\_add\_\_(self,other) (These are order specific), \_\_radd\_\_ (Reflected add, if the normal add doesn't work then we pass reflected arguments to this to perform add in a different way)(both add and radd receive self first and then the other input), \_\_iadd\_\_ (Inplace add, +=1). There are other methods for division and all in arithmetic operations and can be looked at whenever required. https://docs.python.org/3/reference/datamodel.html?#object.__mul__

7. `Wrapper over iterables:` \_\_len\_\_, \_\_contains\_\_(works with bool returning (item in list)), \_\_iter\_\_(used to iterate over the iterable(item in list))

```python
class Inventory:

	def __init__(self):
		self.slots = []

	def add(self,item):
		self.slots.append(item)

	def __len__(self):
		return len(self.slots)

	def __contains__(self,item):
		return item in self.slots

	def __iter__(self):
		yield from self.slots
```

```python
from item import Item, Weapon
from inventory import Inventory

knife = Weapon('knife','sharp',20)
print(knife)
inv1 = Inventory()
print(len(inv1))
inv1.add(knife)
print(len(inv1))
print(knife in inv1)

dagger = Weapon('dagger','Lethal',25)
inv1.add(dagger)

sword = Weapon('sword','Fatal',50)
inv1.add(sword)

for item in inv1:
	print(item)
```

8. Subclasses on built ins:

We can extend the features already provided by the builtin objects to suit our custom needs. Extending the creation methods for immutables happens through \_\_new\_\_ and for mutables using \_\_init\_\_.

```python
class ReversedStr(str):

	def __new__(*args,**kwargs):
		self = str.__new__(*args,**kwargs)
		self = self[::-1]
		return self
```

We donot use super in place of str in the \_\_new\_\_ method since it is safer to use that. super's behaviour might be unpredictable. \_\_new\_\_ is a class method whereas \_\_init\_\_ is instance centric.

## Links

1. https://www.digitalocean.com/community/tutorials/how-to-use-args-and-kwargs-in-python-3
2. http://python-history.blogspot.com/2010/06/method-resolution-order.html
3. https://docs.python.org/3/reference/datamodel.html?#object.__mul__