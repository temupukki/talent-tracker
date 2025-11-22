from django.db import models
class Job(models.Model):
    name=models.CharField(max_length=100)
    age=models.IntegerField()
    location=models.CharField(max_length=40)
    job=models.CharField(max_length=40)
    
