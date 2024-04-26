from django.shortcuts import render

from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser

from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView

from .models import * 
from .serializers import * 





# gett all events
class ListTaks(ListAPIView):
    queryset = Taks.objects.all()
    serializer_class = TaKsSerializers
    # permission_classes manage  = [IsAuthenticated] #! diasbled for testing
    

#Get single event
class GetTaks(RetrieveAPIView):
    queryset = Taks.objects.all()
    serializer_class = TaKsSerializers
    # permission_classes manage  = [IsAuthenticated] #! diasbled for testing


