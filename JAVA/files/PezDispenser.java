class PezDispenser{
	private final String characterName;
	public static final int MAX_PEZ = 12;
	
	public PezDispenser(String characterName)
	{
		this.characterName = characterName;
	}

	public String getCharacterName()
	{
		return characterName;
	}

	/*public String swapHead(String characterName)
	{
		String store = this.characterName;
		this.characterName = characterName;
		return store;
	}*/
}