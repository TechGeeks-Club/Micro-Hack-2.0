from rest_framework import serializers
from .models import Status,Priority,Taks,Comment

class EventSerializers(serializers.ModelSerializer):
    # ord_itm = ord_itm_srlz(many=True, read_only=True)
    class Meta:
        model            = Event
        fields           = "__all__"
        read_only_fields = ['created_by','created_at']
        required_fields  = ['title','targets']


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


    