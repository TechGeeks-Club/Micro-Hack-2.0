from django.contrib import admin
from django.urls import path,include
from .views import ListEvents,GetEvents,my_events

urlpatterns = [
    path("", ListEvents.as_view()),
    path("<int:pk>", GetEvents.as_view()),
    path('my_events/',my_events),
    
]
