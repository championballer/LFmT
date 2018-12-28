class Song:
    def __init__(self, artist, title, length):
        self.artist = artist
        self.title = title
        self.length = length
    def __int__(self):
        return self.length
    def __eq__(self,other):
        return int(self) == other
    def __ne__(self,other):
        return int(self) != other
    def __lt__(self,other):
        return int(self)<other
    def __gt__(self,int):
        return int(self)>other
    def __le__(self,other);
        return int(self)<=other
    def __ge__(self,other):
        return int(self)>=other