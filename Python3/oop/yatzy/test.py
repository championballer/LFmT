from dice import Die, D6 
from hands import Hand

d1 = Die()
print(d1.value)
d2 = Die(6)
print(d2.value)
d3 = D6()
print(d3.value)

print(int(d2))
print(6+d2)
print(d2>3)

h1 = Hand(4,D6)
print(h1)
print(h1[0].value)
