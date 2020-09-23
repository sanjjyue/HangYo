from django.shortcuts import render

# Create your views here.
def Mainpage(request):
    return render(request,'home.html')