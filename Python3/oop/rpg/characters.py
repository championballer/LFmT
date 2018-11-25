class Character:
	def __init__(self,name="",**kwargs):
		if name=="":
			raise ValueError
		self.name = name

		for key,value in kwargs.items():
			setattr(self,key,value)
		print("Character")