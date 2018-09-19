# java

Repository includes all code written while picking up JAVA syntax.We start without any IDE, and rather take an independent approach about learning java, that is by employing the terminal to compile and run java files atleast in the beginning.

1. To work with i/o, we import **java.io.Console.** Then,
  
  ```java
  Console console = System.console();
  console.printf("%s",variable);
  String variable = console.readLine("");
  
  ```
    The printf method is a formatted string method and takes the formatted string as the first parameter and then the placeholder values.

*We have access to a global **System** object, using which we access exit method. If we exit with 0, that means we were in control of the exit system, else we weren't.*
