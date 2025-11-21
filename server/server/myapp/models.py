from django.db import models


class Job(models.Model):
    name = models.CharField( max_length=180)
    location = models.CharField(max_length=190)
    company = models.CharField(max_length=190)
    salary = models.IntegerField()
    stock = models.IntegerField()
