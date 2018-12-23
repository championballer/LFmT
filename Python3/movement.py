def move(player, direction):
	x,y,hp = player
	mv_x = direction[0]
	mv_y = direction[1]

	print(x,y,mv_x,mv_y)
	if (mv_y==-1 and y==0) or (mv_y==1 and y==9) or (mv_x==-1 and x==0) or (mv_x==1 and x==9):
		hp-=5
	else:
		x+=mv_x
		y+=mv_y
	return x,y,hp

print(move((1, 1, 10), (-1, 0))) 