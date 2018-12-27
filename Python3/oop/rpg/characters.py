class Character:
	def __init__(self,name,**kwargs):
		#print("Character called",end='\n')
		self.name = name

		for key,value in kwargs.items():
			setattr(self,key,value)

	def __str__(self):
		return "{}:{}".format(type(self).__name__,self.name)