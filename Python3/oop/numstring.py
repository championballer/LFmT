class NumString:

	def __init__(self,value):
		self.value = value

	def __str__(self):
		return str(self.value)

	def __int__(self):
		return int(self.value)

	def __float__(self):
		return float(self.value)

	def __add__(self,other):
		return int(self)+other

	def __radd__(self,other):
		return self + other

	def __iadd__(self,other):
		return self + other
