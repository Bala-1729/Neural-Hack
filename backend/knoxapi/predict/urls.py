from rest_framework import routers
from django.urls import include,path
from . import views

urlpatterns = [
    path('instantUser/',views.InstantUser.as_view(), name="instantUser"),
    path('userProfile/',views.UserProfileView.as_view()),
    path('userProfile/update/',views.UserProfileUpdateView.as_view()),
    path('medicalData/',views.MedicalDataView.as_view()),
    path('pastWeek/',views.PastWeekView.as_view()),
    #path('changePassword/',views.ChangePasswordView.as_view())
]
