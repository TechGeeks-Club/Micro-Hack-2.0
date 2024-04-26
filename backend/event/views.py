from django.shortcuts import render

from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser

from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView


from django.http import HttpResponse, JsonResponse,response,HttpRequest
# from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required, permission_required
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from django.shortcuts import get_object_or_404

from rest_framework.authtoken.models import Token
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView



from .models import Event

from django.contrib.auth.models import Group 
from .serializers import EventSerializers


# gett all events
class ListEvents(ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializers
    # permission_classes manage  = [IsAuthenticated] #! diasbled for testing
    

#Get single event
class GetEvents(RetrieveAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializers
    # permission_classes manage  = [IsAuthenticated] #! diasbled for testing


@api_view(["GET"])
def my_events(request):
    user_group = request.user.groups.all()
    #get group targets
    Events = Event.objects.filter(targets__in=user_group)
    sz = EventSerializers(Events,many=True)
    if sz.is_valid:
        return JsonResponse({'events':sz.data})
    return JsonResponse("JsonResponse")