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
		if '.' in self.value:
			return float(self)+other
		return int(self)+other

	def __radd__(self,other):
		return self + other

	def __iadd__(self,other):
		return self + other

	def __mul__(self,other):
		if '.' in str(self.value):
			return float(self)*other
		return int(self)*other

	def __rmul__(self,other):
		return self * other

	def __imul__(self,other):
		return self * other