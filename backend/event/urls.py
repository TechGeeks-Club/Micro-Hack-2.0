from django.contrib import admin
from django.urls import path,include
from .views import ListEvents,GetEvents

urlpatterns = [
    path("", ListEvents.as_view()),
    path("<int:pk>", GetEvents.as_view()),

    
]
