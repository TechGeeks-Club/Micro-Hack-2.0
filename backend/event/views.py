from rest_framework.permissions import IsAuthenticated
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.generics import ListCreateAPIView,RetrieveUpdateDestroyAPIView

from .models import Event
from .serializers import EventSerializers


# ? get all events | create event
class EventsCRView(ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializers
    permission_classes  = [IsAuthenticated] 
    

# ? Read Update Delete for event
class EventsRUDView(RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializers
    permission_classes = [IsAuthenticated] 


# ? this function will return all events that are targeted to the user
@api_view(["GET"])
def get_user_events_view(request):
    user_group = request.user.groups.all()
    #get group targets
    Events = Event.objects.filter(targets__in=user_group)
    sz = EventSerializers(Events,many=True)
    if sz.is_valid:
        return JsonResponse({'events':sz.data})
    return JsonResponse("JsonResponse")