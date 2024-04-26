from django.shortcuts import render

from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser

from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView
from django.http import HttpResponse, JsonResponse,response,HttpRequest
#decorators
#import api_view
from rest_framework.decorators import api_view, permission_classes, authentication_classes

from .serializers import UserSerializers

# get my profile data
@api_view(["GET"])
def my_profile(request):
    user = request.user
    sz = UserSerializers(user)
    if sz.is_valid:
        print("aaaaaaaaaaa")
        return JsonResponse({'me':sz.data})
    # responce error
    print("bbbbbbbbbbbbbbbbbb")
    return JsonResponse("error")