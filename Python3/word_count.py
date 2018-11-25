def word_count(str):
	str = str.lower()
	words = str.split()
	word_freq = {}
	for word in words:
		if word not in word_freq:
			word_freq[word]=1
		else:
			word_freq[word] = word_freq[word]+1
	return word_freq

print(word_count("I do not like it Sam I Am"))