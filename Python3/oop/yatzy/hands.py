class Hand(list):
	def __init__(self,size,class_name=None,*args,**kwargs):
		if class_name==None:
			raise ValueError("Please pass class to build a hand on")
		super().__init__()

		for _ in range(size):
			self.append(class_name)
