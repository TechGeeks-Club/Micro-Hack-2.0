from channels.generic.websocket import AsyncWebsocketConsumer
from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync
import json

import os
import django



os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'src.settings')

django.setup()


from task.models import Taks,Comment

class ChatConsumer(WebsocketConsumer):
    # login required
    def connect(self):
        self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
        self.room_group_name = "chat_%s" % self.room_name
        self.user = self.scope["user"]
        print("connecte user :", self.user)
        # Join room group
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name, self.channel_name
        )

        self.accept()

    def disconnect(self, close_code):
        # Leave room group
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name, self.channel_name
        )

    # Receive message from WebSocket
    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json["message"]
        
        # message will be `action,data1,data2`
        messageArray = message.split(";")
        
        if messageArray[0] == "NT" and len(messageArray)>=3: # new task
            
            Taks.objects.create(
                title=messageArray[1],
                description=messageArray[2],
                property_id=1,   
                event_id=self.room_name
            )
        elif messageArray[0] == "DT" and len(messageArray)>=2: # delete task
            Taks.objects.filter(id=messageArray[1]).delete()
        
        elif messageArray == "NC" and len(messageArray)>=2: # new comment
            Comment.objects.create(
                task_id=messageArray[1],
                comment=messageArray[2],
                user_id=self.user.id
            )
           
        else : 
            # Send message to room group
            async_to_sync(self.channel_layer.group_send)(
                self.room_group_name, {"type": "chat_message", "message": message}
            )

    # Receive message from room group
    def chat_message(self, event):
        message = event["message"]

        # Send message to WebSocket
        self.send(text_data=json.dumps({"message": message}))
