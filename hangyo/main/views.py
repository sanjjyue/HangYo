from django.shortcuts import render,redirect
from .models import Stores,Report
from .forms import ReportForm

# Create your views here.
def mainpage(request):
    all_info = Stores.objects.all()[:100]

    # 제보하기 forms
    if request.method == "POST":
        contentform = ReportForm(request.POST)
        if contentform.is_valid():
            contentform.save()
            return redirect('mainpage')
    contentform = ReportForm()

    return render(request,'home.html', {'take_all_info' : all_info, 'contentform' : contentform})

