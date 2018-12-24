# python3

This repository contains code written while picking up python. It will contain major components that go into learning a general purpose language and this readme is supposed to act like a cheatsheet to remember the important as well as unique components of python that will enable picking and repicking it in very efficient manner.

1. No variable type declaration
2. REPL(Read, Evaluate, Print, Loop) : Python Shell : Can be used to test output for certain commands and for certain input and output cases. Read the line, Evaluate it, Print the result, and then iterate for further commands.
3. Printing is done using print(), multiple strings can be passed, end ="\n" can also be included to move to next line post printing. 
4. Quotes usage is normal. 
5. Snakecase while naming variables. my_name
6. input(prompt) is used to take in input and accepts string by default 
7. Strings are immutable. len(string) used to find length of string. Every variable are objects of the global class. They have specific methods and data members.
  a) str.upper()

8. Random library can be used to generate random values in python.
9. //todo : Clearing screen from os library
10. Use of {}, .format is quite helpful

```python
print("Hello {}".format("Shiv")) #prints Hello Shiv
```

11. Use of \*args,\*\*kwargs is important for arguments in a function. 

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

6. isinstance('a',(str,bool,dict)) -> False, will return True if any one satisfies the condition (Searches the entire family tree)
7. issubclass(bool,int) -> True

```python
issubclass(Thief,Character) #->True
```

8. type(object) tells the parent of the object.
9. \_\_class\_\_ returns the class which the instance belongs to whereas the dunder name dunder attribute returns the clas name

## Links

1. https://www.digitalocean.com/community/tutorials/how-to-use-args-and-kwargs-in-python-3
2. http://python-history.blogspot.com/2010/06/method-resolution-order.html