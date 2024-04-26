from django.urls import path, re_path
from .constumers import *

websocket_urlpatterns = [
    # path('ws/your-url/', YourConsumer.as_asgi()),
    re_path(r"ws/chat/(?P<room_name>\w+)/$", ChatConsumer.as_asgi()),
]