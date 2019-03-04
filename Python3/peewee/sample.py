from peewee import *

db = SqliteDatabase("Students.db")

class Student(Model):
	username = CharField(max_length=255,unique=True)
	points = IntegerField(default=0)

	class Meta:
		database = db

students = [{
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
	for student in students:
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