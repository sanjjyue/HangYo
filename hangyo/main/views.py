from django.shortcuts import render,redirect
from .models import Stores,Report
from .forms import ReportForm

# Create your views here.
def mainpage(request):
    all_info = Stores.objects.all()[0:10]

    return render(request,'home.html', {'take_all_info' : all_info})

def report(request, info_id):
    
    if request.method == "POST":
        contentform = ReportForm(request.POST)
        if contentform.is_valid():
            contentform.save(commit=False)
            contentform.stores=Stores.objects.get(pk=info_id)
            contentform.save()
            return redirect('mainpage')
    reportform = ReportForm()

    return render(request,'home.html', {'reportform' : reportform})
    