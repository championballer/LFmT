players = []

add_another_player = input("Would you like to insert another player?(yes/no)")
add_another_player = add_another_player.lower()

while add_another_player=="yes":
	player_name = input("Please enter the name of the player you would like to add:")
	players.append(player_name)
	add_another_player = input("Would you like to insert another player?(yes/no)")
	add_another_player.lower()

for i in range(len(players)):
	print(("Player {} : {}").format(i+1,players[i]))

goalkeeper = int(input("Who would you would like to be the goalie?(Enter number from the above list): "))
print(players[goalkeeper-1])	