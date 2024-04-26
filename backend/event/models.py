from django.db import models
from django.contrib.auth.models import User


class Event(models.Model):
    title       = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    created_at  = models.DateTimeField(auto_now=True)
    created_by  = models.ForeignKey(User, on_delete=models.CASCADE, related_name='events')
    type        = models.CharField(max_length=100,null=True,blank=True) # this field is temporary null to avoid migration issues
    targets     = models.ManyToManyField(User, related_name='targeted_events', blank=True)
    
    def __str__(self):
        return self.title
    
