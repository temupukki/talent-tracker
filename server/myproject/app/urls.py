from django.urls import path
from .views import register_user
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    path('auth/register/', register_user, name='register'),
    path('auth/login/', TokenObtainPairView.as_view(), name='login'),
]