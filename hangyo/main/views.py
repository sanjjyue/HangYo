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
            content_form.save()
            return redirect('mainpage')
    reportform = ReportForm()

    return render(request,'home.html', {'take_all_info' : all_info, 'reportform' : reportform})

# def search(request):
#     all_info = Stores.objects.all()[:100]
#     if request.method == "POST":
#         contentform = ReportForm(request.POST)
#         if contentform.is_valid():
#             contentform.save()
#             return redirect('mainpage')
#     reportform = ReportForm()

#     content = dict()
#     free_store = Post.objects.filter(category__icontains)

#     context = {'take_all_info' : all_info, 'reportform' : reportform}

#     return render(request, 'search.html', context)

    