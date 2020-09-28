from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class MedicalData(models.Model):
    patientName=models.CharField(max_length=256, null=True)
    patientId=models.CharField(max_length=256,null=True)
    dateCreated=models.DateTimeField(auto_now_add=True,null=True)
    pregnancies=models.IntegerField(null=True)
    glucose=models.IntegerField(null=True)
    bloodPressure=models.IntegerField(null=True)
    skinThickness=models.IntegerField(null=True)
    insulin=models.IntegerField(null=True)
    bmi=models.FloatField(null=True)
    diabetesPedgreeFunction=models.FloatField(null=True)
    age=models.IntegerField(null=True)
    result=models.IntegerField(null=True)
    owner=models.ForeignKey(User,related_name="medicalData", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.patientName

class UserProfile(models.Model):
    fullName=models.CharField(max_length=256,null=True,default='Representative Name')
    companyName=models.CharField(max_length=256,null=True,default='Hospital Name')
    jobRole=models.CharField(max_length=256,null=True,default='Job Role')
    companyAddress=models.CharField(max_length=256,null=True,default='Hospital Address')
    city=models.CharField(max_length=256,null=True,default='City')
    country=models.CharField(max_length=256,null=True,default='Country')
    zipCode=models.CharField(max_length=256,null=True,default='ZIP Code')
    mobileNumber=models.CharField(max_length=256,null=True,default='Mobile Number')
    DOB=models.CharField(max_length=256,null=True,default='Date Of Birth')
    description=models.CharField(max_length=256,null=True,default='Hospital Description')
    user=models.OneToOneField(User,related_name="userProfile",on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.fullName
