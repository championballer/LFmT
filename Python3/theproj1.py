TICKET_PRICE = 10
SERVICE_CHARGE = 2
tickets_remaining = 100

def calculate_price(num_tickets):
	return (num_tickets*TICKET_PRICE)+SERVICE_CHARGE

while tickets_remaining>=1:
	print(("There are {} tickets remaining").format(tickets_remaining))

	user_name = input("Please enter your name: ")

	try:
		num_tickets = int(input(("Hello {}, please enter the number of tickets you need:").format(user_name)))
		if num_tickets>tickets_remaining:
			raise ValueError("Your request is for more tickets than are available")
	except ValueError as err:
		print("Caused an error,try again")
		print(("{}").format(err))
	else:
		total_price =  calculate_price(num_tickets)

		print(("{}, you need to pay ${}").format(user_name,total_price))
		con = input(("{}, would you like to proceed(Y/N):").format(user_name))

		if con.lower() == "y":
			print("Sold")
			tickets_remaining-=num_tickets
		else:
			print(("Thanks for giving us a chance anyways,{} ").format(user_name))

print("All tickets sold")
