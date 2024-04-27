from rest_framework import serializers
from .models import User


class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        #  i need all filde except password
        fields = "__all__"
        
        read_only_fields = ['created_at']
        extra_kwargs = {'password': {'write_only': True}}        


