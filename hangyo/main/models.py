from django.db import models

# Create your models here.

class Stores(models.Model):
    store_name = models.CharField(max_length=100, null=True)
    phone_num = models.CharField(max_length=100, null=True)
    location = models.CharField(max_length=100, null=True)
    longitude = models.FloatField(default=0)
    # 경도
    Latitude = models.FloatField(default=0)
    # 위도
    # idx = models.IntegerField(default=0)
    def __str__(self):
        return str(self.store_name)

TYPE_CHOICES = (
    ('','제보유형을 선택해 주세요'),
    ('비가맹점', '비가맹점'),
    ('폐업', '폐업'),
    ('불친절', '불친절')
)

class Report(models.Model):
    # name = models.CharField("가게명", max_length=15, null=True)
    stores = models.ForeignKey(Stores, verbose_name="관련 가게", on_delete=models.CASCADE, null=True)
    type = models.CharField("제보 유형", max_length=100, choices=TYPE_CHOICES)
    content = models.TextField('제보 내용', max_length=300)  

    def __str__(self):
        # return f'[{self.stores.store_name}]의 제보내용 : {self.content[:10]}...' 
        return self.content
