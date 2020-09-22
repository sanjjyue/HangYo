from django.contrib import admin
from .models import stores
from import_export.admin import ExportActionModelAdmin, ImportExportMixin, ImportMixin

class StoreAdmin(ImportExportMixin, admin.ModelAdmin):
    pass


admin.site.register(stores,StoreAdmin)

# Register your models here.
