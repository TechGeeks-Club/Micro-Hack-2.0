from django.shortcuts import render

from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser

from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView

from .models import Event 
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

