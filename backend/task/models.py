from django.db import models
from django.utils import timezone
# import group model
from django.contrib.auth.models import Group
# Create your models here.

class Status(models.Model):
    name = models.CharField(max_length=25)
    value = models.IntegerField(default=0,unique=True)
    def __str__(self):

        return self.name

class Priority(models.Model):
    name = models.CharField(max_length=25)
    value = models.IntegerField(default=0,unique=True)

    def __str__(self):
        return self.name

class Taks(models.Model):
    title            = models.CharField(max_length=100)
    description      = models.TextField(null=True, blank=True)
    # time now treu
    created_at       = models.DateTimeField(auto_now=True)
    created_by       = models.ForeignKey('core.User', on_delete=models.SET_NULL,null=True, blank=True)
    end_date         = models.DateTimeField(null=True, blank=True)
    status           = models.ForeignKey(Status, on_delete=models.SET_NULL, null=True, blank=True)
    priority         = models.ForeignKey(Priority, on_delete=models.SET_NULL, null=True, blank=True)
    Event            = models.ForeignKey('event.Event', on_delete=models.CASCADE)
    # ? assign task to multiple users
    assign_to_user   = models.ManyToManyField('core.User', related_name='assign_to_user', blank=True)
    assign_to_group  = models.ManyToManyField('auth.Group', related_name='assign_to_group', blank=True)


    def __str__(self):
        return self.title
    

# ? every task can have multiple comments
class Comment(models.Model):
    content = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    created_by = models.ForeignKey('core.User', on_delete=models.SET_NULL, null=True, blank=True)
    task = models.ForeignKey(Taks, on_delete=models.CASCADE)
    # ? every comment can have one or multiple mentions
    mention = models.ManyToManyField('core.User', related_name='comment_mention', blank=True)

    def __str__(self):
        return self.text
