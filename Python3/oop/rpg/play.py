from thieves import Thief

Shiv = Thief(name="Shiv")
print(Shiv.sneaky)
print(Shiv.name)
print(Shiv.hide(9))

print(Thief.__mro__)