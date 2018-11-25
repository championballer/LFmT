attendees = ["Siddhant", "Shubham", "Anshima","Srijan","Nipun"]

for attendee in attendees:
	print(attendee)

#The last element stored in the iterator is maintained
print(attendee)

travel_expenses = [
    [5.00, 2.75, 22.00, 0.00, 0.00],
    [24.75, 5.50, 15.00, 22.00, 8.00],
    [2.75, 5.50, 0.00, 29.00, 5.00],
]

#travel_expenses[0].append(10.0)

print(travel_expenses[0])

for member in travel_expenses:
	for item in member:
		print(item)