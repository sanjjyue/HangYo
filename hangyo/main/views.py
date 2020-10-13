from django.shortcuts import render
from .models import Stores

# Create your views here.
def mainpage(request):
    all_info = Stores.objects.all()[:100]
    context = {'take_all_info' : all_info}
    return render(request,'home.html', context)

def storeinfo(request):
    return render(request, 'home.html', context)