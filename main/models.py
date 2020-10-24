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