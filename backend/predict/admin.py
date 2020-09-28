from django.contrib import admin
from .models import MedicalData,UserProfile

# Register your models here.
admin.site.register(MedicalData)
admin.site.register(UserProfile)
