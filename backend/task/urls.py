from django.contrib import admin
from django.urls import path,include
from .views import ListTaks,GetTaks,user_tasks_view


urlpatterns = [
    path("", ListTaks.as_view()),
    path("<int:pk>", GetTaks.as_view()),
    path('my_tasks/<int:event_id>',user_tasks_view),
    
]
