from django.shortcuts import render

from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser

from rest_framework.generics import ListAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView
from django.http import JsonResponse
#decorators
#import api_view
from rest_framework.decorators import api_view

from .models import * 
from .serializers import * 





# get all tasks
class ListTaks(ListAPIView):
    queryset = Taks.objects.all()
    serializer_class = TaKsSerializers
    permission_classes  = [IsAuthenticated] 
    

#Get single task 
class GetTaks(RetrieveAPIView):
    queryset = Taks.objects.all()
    serializer_class = TaKsSerializers
    permission_classes   = [IsAuthenticated] 

# ? this function will return all tasks that are targeted to the user
@api_view(["GET"])
def user_tasks_view(request,event_id):
    user = request.user.groups.all()

    tasks = Taks.objects.filter(event=event_id,assign_to_group__in=user)
    TaKsSerializer = TaKsSerializers(tasks,many=True)
    if TaKsSerializer.is_valid:
        return JsonResponse({'tasks':TaKsSerializer.data})
    return JsonResponse("JsonResponse")