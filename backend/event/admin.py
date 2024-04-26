from django.contrib import admin
from .models import Event

# Register your models here.

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ['title', 'description', 'created_at', 'created_by', 'type']
    search_fields = ['title', 'description']
    list_filter = ['created_at', 'created_by', 'type']
    list_per_page = 10
    date_hierarchy = 'created_at'
    ordering = ['created_at']