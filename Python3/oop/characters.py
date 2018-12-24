class Character:

	def __init__(self,name,**kwargs):
		self.name = name

		for key,value in kwargs.items():
			setattr(self,key,value)

class Thief(Character):
	

	def __init__(self,name,**kwargs):
		super().__init__(name,**kwargs)
		self.sneaky = True

	def pickpocket():
		print('Yay')

	def sample(self):
		print('sample')