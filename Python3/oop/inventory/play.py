from item import Item, Weapon
from inventory import Inventory

knife = Weapon('knife','sharp',20)
print(knife)
inv1 = Inventory()
print(len(inv1))
inv1.add(knife)
print(len(inv1))
print(knife in inv1)

dagger = Weapon('dagger','Lethal',25)
inv1.add(dagger)

sword = Weapon('sword','Fatal',50)
inv1.add(sword)

for item in inv1:
	print(item)