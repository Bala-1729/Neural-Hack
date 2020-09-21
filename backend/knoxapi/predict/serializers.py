from .models import MedicalData, UserProfile
from rest_framework import serializers


class MedicalDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicalData
        fields = '__all__'


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'


# class ChangePasswordSerializer(serializers.Serializer):
#     model = User
#     old_password = serializers.CharField(required=True)
#     new_password = serializers.CharField(required=True)
