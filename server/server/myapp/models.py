from django.db import models


class Job(models.Model):
    name = models.CharField(180)
    location = models.CharField(189)
    company = models.CharField(90)
    salary = models.IntegerField()
    stock = models.IntegerField()
