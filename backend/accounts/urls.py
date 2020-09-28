from django.urls import path, include

from knox.views import LogoutView
from .views import UserAPIView, RegisterAPIView, LoginAPIView
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', include('knox.urls')),
    path('user', UserAPIView.as_view()),
    path('register', RegisterAPIView.as_view()),
    path('login', LoginAPIView.as_view()),
    path('logout', LogoutView.as_view(), name='knox_logout'),
    path('password_reset/',auth_views.PasswordResetView.as_view(),name="reset_password"),
    path('password_reset_sent/',auth_views.PasswordResetDoneView.as_view(),name="password_reset_done"),
    path('reset/<uidb64>/<token>/',auth_views.PasswordResetConfirmView.as_view(),name="password_reset_confirm"),
    path('password_reset_complete/',auth_views.PasswordResetCompleteView.as_view(),name="password_reset_complete"),
]
