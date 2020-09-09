from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class MedicalData(models.Model):
    patientName=models.CharField(max_length=256, null=True)
    dateCreated=models.DateTimeField(auto_now_add=True,null=True)
    pregnancies=models.IntegerField(null=True)
    glucose=models.IntegerField(null=True)
    bloodPressure=models.IntegerField(null=True)
    skinThickness=models.IntegerField(null=True)
    insulin=models.IntegerField(null=True)
    bmi=models.FloatField(null=True)
    diabetesPedgreeFunction=models.FloatField(null=True)
    age=models.IntegerField(null=True)
    Result=models.IntegerField(null=True)
    owner=models.ForeignKey(User,related_name="medicalData", on_delete=models.CASCADE, null=True)
