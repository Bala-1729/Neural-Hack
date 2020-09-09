from rest_framework import routers
from django.urls import include,path
from . import views
router = routers.DefaultRouter()
router.register('predict', views.MedicalDataViewSet, 'medicalData')

urlpatterns = [
    path('instantUser/',views.InstantUser.as_view(), name="instantUser"),
    # path('try/', views.Predict.as_view(), name='predict'),
    path('',include(router.urls)),

]
