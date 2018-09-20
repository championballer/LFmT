# java

Repository includes all code written while picking up JAVA syntax.We start without any IDE, and rather take an independent approach about learning java, that is by employing the terminal to compile and run java files atleast in the beginning. jshell is also used here at some places and in is the repl(**read, eval,print,loop**) introduced in JAVA 9.

1. To work with i/o, we import **java.io.Console.** Console is a wrapper class over System object to handle i/o. There are other ways also available to take i/o. Then,
  
  ```java
  System.out.println("");
  Console console = System.console();
  console.printf("%s",variable);
  String variable = console.readLine("");
  
  ```
    The printf method is a formatted string method and takes the formatted string as the first parameter and then the placeholder values.

*We have access to a global **System** object, using which we access exit method. If we exit with 0, that means we were in control of the exit system, else we weren't.*
   ```java
   System.exit(0);
   ```

2. The primitive variables(**8**) in java are:

  ```java
  int
  char
  boolean
  double
  float
  long
  short
  byte
  ```
  
3. To parse integer input from readLine method we need to parse the string as an integer and we have a method for this. This method is a *static method*.

  ```java
  Integer.parseInt(str);
  ```
  
    Here Integer is a new object class called a wrapper class and are available for all primitive types.

4. The strings have methods such as equals and equalsIgnoreCase to compare strings. equalsIgnoreCase ignores typecasing and equates for letter to letter.

5. The logical operator rules and looping rules are the same as present in other common languages.

6. Objects and Classes in JAVA, 
  
    Blueprints : Classes
    Instances of these blueprints : Objects
    
    Class is made using **class** keyword and can include members and methods analogous to abilities and verbs associated to any object. We use access level specifiers while working with classes which include public, protected and private. In case of no modifiers, the files are available in the same package(*same directory*) to each other. Only private hides members and methods in the same package. 
    
    Getters,Setters, Constructors work as usual. *this* keyword also has similar functioning. 
    
    *final* keyword(analogous to const in C++) allows only once initialisation of the object. *static* keyword allows us to define class-wide properties and they can be accessed using the class and require no object or instance to be referred to.

7. When we run (class) file after javac compilation, then it looks for a public static method called main to run and accordingly we are set. We also have string[] args that we can use to accept arguments from command line to our program.

8. Function overloading is similar to as seen before. 

9. Exceptions: try and catch blocks are employed for this. Example is of IllegalArgumentException. We place a condition to throw a certain exception and then in our user class we employ a try block, in which if the code throws the exception then we can place a catch phrase to execute code if that is encountered.
