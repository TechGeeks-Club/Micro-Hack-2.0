
from django.contrib import admin
from django.urls import path,include



urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/event/", include("event.urls")),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
]

# auth endpoints:

# /auth/users/ - list of users
# /auth/users/me/ - user detail
# /auth/users/create/ - create user
# /auth/token/login/ - obtain token
# /auth/token/logout/ - logout
# /auth/users/set_password/ - set password
# /auth/users/set_username/ - set username


