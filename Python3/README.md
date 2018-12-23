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
9. 

## Dunder Main (\_\_main\_\_) 

Double underscore (method name) double underscore - adopted by community as dunder.

__\_\_name\_\_ is a built-in variable which evaluates to the name of the current module.__ Since there is no main() function in Python, when the command to run a python program is given to the interpreter, the code that is at level 0 indentation is to be executed. However, before doing that, it will define a few special variables. \_\_name\_\_ is one such special variable. If the source file is executed as the main program, the interpreter sets the \_\_name\_\_ variable to have a value “\_\_main\_\_”. If this file is being imported from another module, \_\_name\_\_ will be set to the module’s name.

The sequence in which code is written in a scrippting language like python is quite important, including the code that is imported. Since all code in files imported and the source file is run by default. We can use \_\_main\_\_ to check if the file is being run as a source file or as a library and accordingly work around functions. 
