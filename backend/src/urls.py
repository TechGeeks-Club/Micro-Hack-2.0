
from django.contrib import admin
from django.urls import path,include


urlpatterns = [
    path("chat/", include("realtime.urls")),
    path('admin/', admin.site.urls),
    path("api/event/", include("event.urls")),
]
