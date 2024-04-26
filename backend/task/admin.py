from django.contrib import admin
from .models import *
# Register your models here.

@admin.register(Taks)
class TaskAdmin(admin.ModelAdmin):
    list_display = ['title', 'description', 'priority', 'status', 'created_at', 'created_by']
    search_fields = ['title', 'description']
    list_filter = ['priority', 'status', 'created_at', 'created_by']
    list_per_page = 10
    date_hierarchy = 'created_at'
    ordering = ['created_at']
    
@admin.register(Status)
class StatusAdmin(admin.ModelAdmin):
    list_display = ['name', 'value']
    search_fields = ['name']
    list_per_page = 10
    ordering = ['value']

@admin.register(Priority)
class PriorityAdmin(admin.ModelAdmin):
    list_display = ['name', 'value']
    search_fields = ['name']
    list_per_page = 10
    ordering = ['value']

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ['content', 'created_at', 'created_by', 'task']
    search_fields = ['content']
    list_filter = ['created_at']
    list_per_page = 10
    date_hierarchy = 'created_at'
    ordering = ['created_at']


