import java.io.Console;
 
public class mul {
    
    public static void main(String[] args) {
        Console console = System.console();
        /*  Some terms:
            noun - Person, place or thing
            verb - An action
            adjective - A description used to modify or describe a noun
            Enter your amazing code here!
        */
      
        String name = console.readLine();
        String adj = console.readLine();
      
        console.printf("%s is %s\n",name,adj);
    }
    
}
