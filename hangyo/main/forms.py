from django import forms
from .models import Stores, Report

class ReportForm(forms.ModelForm):
    class Meta:
        model = Report
        fields = "__all__"