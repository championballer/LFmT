### Pewee 

Pewee is an ORM(Object Relational Model), or in simple words a way for us to use databases in python, and in this case we use sqlite, but others can also be used. An ORM is a piece of software that turns objects in our code to rows in our database and vice versa.

Model -> Table
Attributes -> Columns of the Table

We generally import everything from peewee. SqliteDatabase is the class from Peewee that lets us connect to an Sqlite Database.

```python
from peewee import *

db = SqliteDatabase("Students.db")

class Student(Model):
	username = CharField(max_length=255,unique=True)
	points = IntegerField(default=0)

	class Meta:
		database = db

Students = [{
	'username' : 'Shiv',
	'points' : 247,
	},
	{
	'username' : 'Abhay',
	'points' : 215,
	},
	{
	'username' : 'Pranav',
	'points' : 284,
	},
	{
	'username' : 'Mayank',
	'points' : 254
	}
]

def add_students():
	for student in Students:
		try:
			Student.create(username= student['username'],points=student['points'])
		except IntegrityError:
			student_record = Student.get(username=student['username'])
			student_record.points = student['points']
			student_record.save()

def top_student():
	return Student.select().order_by(Student.points.desc()).get()

if __name__ == "__main__":
	db.connect()
	db.create_tables([Student])
	add_students()
	print(top_student().username)
```

There are majorly 8 main methods with peewee that are : 
1. create()
2. select()
3. save()
4. get()
5. delete_instance()
6. order_by()
7. db_close()
8. update()