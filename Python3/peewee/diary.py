from peewee import *

db = SqliteDatabase("diary.db")

class Entry(Model):
	content
	timestamp

	class Meta:
		database = db