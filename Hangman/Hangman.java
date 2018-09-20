public class Hangman{
	public static void main(String[] args)
	{
		System.out.println("Hello World");

		Game game = new Game("treehouse");

		System.out.println(game.getAnswer());
	}
}