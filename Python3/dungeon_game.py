import random


# Random library has a method by the name of sample, that takes as arguments, 
# an iterable and number of unique values to return from it

#draw grid
#pick random pos for the player, monster and door
#draw player in grid
#take i/p for movement
#move player unless illegal move
#check for win/loss
#clear screen and redraw grid

CELLS = [(0,0),(0,1),(0,2),(0,3),(0,4),
		 (1,0),(1,1),(1,2),(1,3),(1,4),
		 (2,0),(2,1),(2,2),(2,3),(2,4),
		 (3,0),(3,1),(3,2),(3,3),(3,4),
		 (4,0),(4,1),(4,2),(4,3),(4,4)]

def get_locations():
	monster,door,player = random.sample(CELLS,3)
	return monster,door,player

def print_locations():
	print(monster,door,player)

def print_grid(grid):
	for i in range(len(grid)):
		print(grid[i])

def draw_grid(player):
	x = player[0]
	y = player[1]
	grid = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
	grid[x][y] = 1
	print_grid(grid)
	
def possible_moves(player):
	MOVES = ['LEFT','RIGHT','UP','DOWN']
	x = player[0]
	y = player[1]

	if x == 4:
		MOVES.remove('DOWN')
	elif x == 0:
		MOVES.remove('UP')
	elif y == 0:
		MOVES.remove('LEFT')
	elif y == 4:
		MOVES.remove('RIGHT')

	return MOVES

def update_player(cmd,player):
	x = player[0]
	y = player[1]

	if cmd == 'RIGHT':
		y+=1
	elif cmd == 'LEFT':
		y-=1
	elif cmd == 'UP':
		x-=1
	elif cmd == 'DOWN':
		x+=1
	player = (x,y)
	return player

monster,door,player = get_locations()

while True:
	draw_grid(player)

	# Print possible moves
	print(possible_moves(player))
	# Take input from user regarding move to make, including one for QUIT, if QUIT then break, else continue
	cmd = input(">")
	if cmd.upper() == 'QUIT':
		print("Thanks for playing")
		break
	# Based on the input update the player's position, and check if win/lose accordingly decide to break or continue
	player = update_player(cmd,player)
	if player == monster:
		print('Sorry, you lose')
		break
	elif player == door:
		print('Yay, you win')
		break
