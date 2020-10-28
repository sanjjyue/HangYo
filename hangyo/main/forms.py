from django import forms
from .models import Stores, Report

class ReportForm(forms.ModelForm):
    class Meta:
        model = Report
        fields = ('stores', 'type', 'content')
    
    def __init__(self, *args, **kwargs):
            super().__init__(*args, **kwargs)
            self.fields['content'].widget.attrs.update({
                'placeholder' : '제보내용을 입력해 주세요',
            })
