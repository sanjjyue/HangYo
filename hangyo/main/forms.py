from django import forms
from .models import Stores, Report

class ReportForm(forms.ModelForm):
    class Meta:
        model = Report
        fields = ('type', 'content','name')

    def __init__(self, *args, **kwargs):
            super().__init__(*args, **kwargs)
            self.fields['content'].widget.attrs.update({
                'placeholder' : '제보내용을 입력해 주세요',
            })
            self.fields['name'].widget.attrs.update({
                'placeholder' : '제보가게를 입력해 주세요',
            })