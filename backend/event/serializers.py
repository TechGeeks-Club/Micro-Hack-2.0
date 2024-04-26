from rest_framework import serializers
from .models import Event

class EventSerializers(serializers.ModelSerializer):
    # ord_itm = ord_itm_srlz(many=True, read_only=True)
    class Meta:
        model            = Event
        fields           = "__all__"
        read_only_fields = ['created_by','created_at']
        required_fields  = ['title','targets']