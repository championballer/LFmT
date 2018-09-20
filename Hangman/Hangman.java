public class Hangman{
	public static void main(String[] args){

		if(args.length==0)
		{
			System.out.println("Usage: Java Hangman <answer>");
			System.err.println("answer is required");
			System.exit(1);
		}

		Game game = new Game(args[0]);
		Prompter prompter = new Prompter(game); 
		while(game.triesLeft()>0 && !game.isWon())
		{
			prompter.promptForGuess();
			prompter.displayProgress();
		}

		prompter.displayResult();
		
	}
}