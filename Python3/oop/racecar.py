class RaceCar:

	color = ""
	fuel_remaining = 0
	laps = 0

	def __init__(self,color,fuel_remaining,laps,**kwargs):
		self.color = color
		self.fuel_remaining = fuel_remaining
		self.laps = laps
		for key,value in kwargs.items():
			setattr(self,key,value)


			