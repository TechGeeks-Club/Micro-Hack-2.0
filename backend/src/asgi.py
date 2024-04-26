import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from  realtime.routing import websocket_urlpatterns 
from channels.security.websocket import AllowedHostsOriginValidator


# Django ASGI application
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'src.settings')
django_asgi_app = get_asgi_application()



application = ProtocolTypeRouter(
    {
        "http": django_asgi_app,
        "websocket": AllowedHostsOriginValidator(
            AuthMiddlewareStack(URLRouter(websocket_urlpatterns))
        ),
    }
)

# # WebSocket ASGI application
# websocket_asgi_app = ProtocolTypeRouter({
#     'websocket': AuthMiddlewareStack(
#         URLRouter(
#             realtime.routing.websocket_urlpatterns
#         )
#     ),
# })

# # Combined ASGI application
# application = ProtocolTypeRouter({
#     'http': django_asgi_app,
#     'websocket': websocket_asgi_app,
# })
