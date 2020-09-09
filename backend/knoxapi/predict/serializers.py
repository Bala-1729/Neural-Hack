from .models import MedicalData
from rest_framework import serializers


class MedicalDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicalData
        fields = '__all__'
