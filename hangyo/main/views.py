from django.shortcuts import render
from .models import Stores

# Create your views here.
def mainpage(request):
    all_info = Stores.objects.all()
    context = {'take_all_info' : all_info}
    return render(request,'home.html', context)

def search(request):
    all_info = Stores.objects.all()
    context = {'take_all_info' : all_info}
    return render(request, 'search.html', context)

