class Item:

	def __init__(self,name,desc):
		self.name = name
		self.desc = desc

	def __str__(self):
		return "{} : {}".format(self.name,self.desc)

class Weapon(Item):

	def __init__(self,name,desc,power):
		super().__init__(name,desc)
		self.power = power