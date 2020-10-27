from django.db import models

# Create your models here.

class Stores(models.Model):
    store_name = models.CharField(max_length=100)
    phone_num = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    store_type = models.CharField(max_length=100)
    longitude = models.FloatField(default=0)
    # 경도
    Latitude = models.FloatField(default=0)
    # 위도

TYPE_CHOICES = (
    ('폐업', '폐업'),
    ('불친절', '불친절')
)

class Report(models.Model):
    type = models.CharField("제보 유형", max_length=100, choices=TYPE_CHOICES)
    stores = models.ForeignKey(Stores, verbose_name="관련 가게", on_delete=models.CASCADE)
    content = models.CharField('제보 내용', max_length=300)  

    def __str__(self):
        return f'[{self.stores.store_name}]의 제보내용 : {self.content[:10]}...' 