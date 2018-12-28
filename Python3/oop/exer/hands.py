from dice import D20
class Hand(list):
    
    def __init__(self,size=0,class_name=None,*args,**kwargs):
        super().__init__()
        for _ in range(size):
            self.append(class_name())
            
    @classmethod
    def roll(cls,size):
        return cls(size,D20)
        
    @property
    def total(self):
        return sum(self)
        