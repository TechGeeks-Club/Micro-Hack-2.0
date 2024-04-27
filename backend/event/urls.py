from django.urls import path
from .views import EventsCRView,EventsRUDView,get_user_events_view

urlpatterns = [
    path("", EventsCRView.as_view()),
    path("<int:pk>", EventsRUDView.as_view()),
    path('my_events/',get_user_events_view),
    
]
