import random

WORDS = ("treehouse","python","learner",)

challenge_word = random.choice(WORDS)

def check(word,challenge_word):
	for char in word:
		if char not in challenge_word:
			raise ValueError("Wrong word entered")
	return 

def prompt(challenge_word):
	guess = set()
	word = ""
	print("The challenge word is {}".format(challenge_word))
	print("Enter q to exit")
	while word!="q":
		word = input("{} words > Enter the word : ".format(len(guess)))
		if word=="q":
			break
		else:
			try:
				check(word,challenge_word)
			except ValueError as err:
				print("{}".format(err))
			else:
				guess.add(word)
	return guess


set1 = prompt(challenge_word)
set2 = prompt(challenge_word)

print(set1^set2)