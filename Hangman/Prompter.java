import java.util.Scanner;

public class Prompter{
	private Game game;

	public Prompter(Game game)
	{
		this.game = game; 
	}

	public void promptForGuess()
	{
		Scanner scanner = new Scanner(System.in);
		System.out.println("Please enter guess:");
		String guessInput = scanner.nextLine();

		try{
			game.applyGuess(guessInput);

		}catch(IllegalArgumentException iae){
			System.out.println(iae.getMessage());
		}
	}

	public void displayProgress()
	{
		System.out.println("You have "+game.triesLeft()+" tries left");
		System.out.println(game.getProgress());
	}

	public void displayResult()
	{
		if(game.isWon())
		{
			System.out.println("You won");
		}

		else
		{
			System.out.println("Sorry, you lost");
		}
	}

}