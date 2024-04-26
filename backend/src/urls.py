
from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static



urlpatterns = [
    path("chat/", include("realtime.urls")),
    path('admin/', admin.site.urls),
    path('api/event/', include("event.urls")),
    path('api/task/', include("task.urls")),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# auth endpoints:

# /auth/users/ - list of users
# /auth/users/me/ - user detail
# /auth/users/create/ - create user
# /auth/token/login/ - obtain token
# /auth/token/logout/ - logout
# /auth/users/set_password/ - set password
# /auth/users/set_username/ - set username


