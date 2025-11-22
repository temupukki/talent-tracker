from django.shortcuts import render
from django.http import HttpResponse
from .models import Job
from .serialiazers import JobSerializer
from rest_framework import viewsets

def index(request):
    return HttpResponse("Man memote new man mn larg man")
class Jobviewset(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class=JobSerializer

