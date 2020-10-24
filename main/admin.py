from django.contrib import admin
from .models import Stores
from import_export.admin import ExportActionModelAdmin, ImportExportMixin, ImportMixin

class StoreAdmin(ImportExportMixin, admin.ModelAdmin):
    pass


admin.site.register(Stores,StoreAdmin)

# Register your models here.
