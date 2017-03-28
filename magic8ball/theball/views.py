from django.shortcuts import render
from django.http import HttpResponse
import redis
# Create your views here.

def index(request):
    return reduce(request, '/theball/ball_form')