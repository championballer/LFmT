import random

class Die:

	def __init__(self,sides=2,count=0):
		if sides<2:
			raise ValueError("Sides need to be more than 2")
		if not isinstance(sides,int):
			raise ValueError("Sides must be a whole number")
		self.value = random.randint(1,sides)

	def __int__(self):
		return self.value
	def __eq__(self,other):
		return int(self) == other
	def __ne__(self,other):
		return int(self) != other
	def __gt__(self,other):
		return int(self)>other
	def __lt__(self,other):
		return int(self)<other
	def __ge__(self,other):
		return int(self)>=other
	def __le__(self,other):
		return int(self)<=other
	def __add__(self,other):
		return int(self)+other
	def __radd__(self,other):
		return self+other
	def __str__(self):
		return str(int(self))

class D6(Die):

	def __init__(self):
		super().__init__(6)