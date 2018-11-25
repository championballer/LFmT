public class sample{
	public static void main(String[] args)
	{
		String discountCode = "ashshjs";
		for(char letter:discountCode.toCharArray())
      	{
        	if(!Character.isLetter(letter) && letter!='$')
          	{
            throw new IllegalArgumentException("Invalid Discount Code");
          	}
      	}
    	System.out.println(discountCode.toUpperCase());
	}
}