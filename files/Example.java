import java.io.Console;

public class Example {

	public static void main(String[] args)
	{
		System.out.println("Hello world");
		Console console = System.console();
		String characterName = console.readLine();
		console.printf("%d%n",PezDispenser.MAX_PEZ);
		PezDispenser d = new PezDispenser(characterName);

		System.out.println(d.getCharacterName());
	}
}