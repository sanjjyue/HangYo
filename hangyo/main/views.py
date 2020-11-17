from django.shortcuts import render,redirect
from .models import Stores,Report
from .forms import ReportForm

# Create your views here.
def mainpage(request):
    all_info = Stores.objects.all()[:5]
    reportform = ReportForm()
    return render(request,'home.html', {'take_all_info' : all_info,'reportform' : ReportForm})

def report(request):
    
    if request.method == "POST":
        contentform = ReportForm(request.POST)
        if contentform.is_valid():
            contentform.save()
            return redirect('mainpage')
    Reportform = reportForm()

    return render(request,'home.html', {'reportform' : Reportform})
    