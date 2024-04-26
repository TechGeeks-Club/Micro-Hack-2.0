from django.shortcuts import render

from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser

from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView
from django.http import HttpResponse, JsonResponse,response,HttpRequest
#decorators
#import api_view
from rest_framework.decorators import api_view, permission_classes, authentication_classes

from .models import * 
from .serializers import * 





# gett all tasks
class ListTaks(ListAPIView):
    queryset = Taks.objects.all()
    serializer_class = TaKsSerializers
    # permission_classes manage  = [IsAuthenticated] #! diasbled for testing
    

#Get single task # update task
class GetTaks(RetrieveAPIView):
    queryset = Taks.objects.all()
    serializer_class = TaKsSerializers
    # permission_classes manage  = [IsAuthenticated] #! diasbled for testing

#get my tasks
@api_view(["GET"])
def my_tasks(request,event_id):
    user = request.user.groups.all()
    
    #get group targets
    # tasks = Taks.objects.filter()
    tasks = Taks.objects.filter(event=event_id,assign_to_group__in=user)
    print(tasks)
    sz = TaKsSerializers(tasks,many=True)
    if sz.is_valid:
        return JsonResponse({'tasks':sz.data})
    return JsonResponse("JsonResponse")