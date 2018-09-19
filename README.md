# java

Repository includes all code written while picking up JAVA syntax.We start without any IDE, and rather take an independent approach about learning java, that is by employing the terminal to compile and run java files atleast in the beginning. jshell is also used here at some places and in is the repl(**read, eval,print,loop**) introduced in JAVA 9.

1. To work with i/o, we import **java.io.Console.** Then,
  
  ```java
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
  
3. To parse integer input from readLine method we need to parse the string as an integer and we have a method for this.

  ```java
  Integer.parseInt(str);
  ```
  
    Here Integer is a new object class called a wrapper class and are available for all primitive types.

4. The strings have methods such as equals and equalsIgnoreCase to compare strings. equalsIgnoreCase ignores typecasing and equates for letter to letter.

5. The logical operator rules and looping rules are the same as present in other common languages.

6. Objects in JAVA 
