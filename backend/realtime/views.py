from django.shortcuts import render

# ! This is the view for the chat application (for testing purposes)

def index(request):
    return render(request, "chat/index.html")

def room(request, room_name):
    return render(request, "chat/room.html", {"room_name": room_name})