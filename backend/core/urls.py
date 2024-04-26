
from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from .models import User
from .views import my_profile


urlpatterns = [
   
    path('me/',my_profile),
] 