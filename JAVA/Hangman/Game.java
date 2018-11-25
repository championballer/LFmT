public class Game{
	public static final int MAX_TRIES = 7;
	private String answer;
	private String hits;
	private String misses;

	public Game(String answer)
	{
		this.answer = answer;
		hits="";
		misses="";
	}

	public String getProgress()
	{
		String toDisplay="";
		for(char letter:answer.toCharArray())
		{
			if(hits.indexOf(letter)!=-1)
			{
				toDisplay+=letter;
			}

			else toDisplay+='_';
		}

		return toDisplay;
	}


	public int triesLeft()
	{
		return MAX_TRIES-misses.length();
	}

	public void applyGuess(String guessInput)
	{
		if(guessInput.length()==0)
		{
			throw new IllegalArgumentException("You did not enter anything");
		}

		if(!Character.isLetter(guessInput.charAt(0)))
		{
			throw new IllegalArgumentException("We require a letter");
		}

		String guessInputAux = guessInput.toLowerCase();
		if(hits.indexOf(guessInputAux.charAt(0))!=-1 || misses.indexOf(guessInputAux.charAt(0))!=-1)
		{
			throw new IllegalArgumentException("You have already tried this");
		}

		else applyGuess(guessInputAux.charAt(0));
	}

	public void applyGuess(char guessInput)
	{
		if(answer.indexOf(guessInput)!=-1)
		{
			hits+=guessInput;
		}

		else
		{
			misses+=guessInput;
		}
	}

	public boolean isWon()
	{
		for(char letter:answer.toCharArray())
		{
			if(hits.indexOf(letter)==-1)
			{
				return false;
			}
		}

		return true;
	}
}