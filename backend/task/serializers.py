from rest_framework import serializers
from .models import Status,Priority,Taks,Comment

 

class StatusSerializers(serializers.ModelSerializer):
    class Meta:
        model = Status
        fields = "__all__"
        

class PrioritySerializers(serializers.ModelSerializer):
    class Meta:
        model = Priority
        fields = "__all__"


class TaKsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Taks
        fields = "__all__"
        read_only_fields = ['created_at']



class CommentSerializers(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = "__all__"
        read_only_fields = ['created_at']


    