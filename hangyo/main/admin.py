from django.contrib import admin
from .models import Stores, Report
from import_export.admin import ExportActionModelAdmin, ImportExportMixin, ImportMixin

class StoreAdmin(ImportExportMixin, admin.ModelAdmin):
    pass


admin.site.register(Stores,StoreAdmin)
admin.site.register(Report)
# Register your models here.
