from django.contrib import admin
from .models import User
# Register your models here.

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email', 'first_name', 'last_name','phone', 'join_date','is_active', 'is_staff', 'is_superuser' ]
    search_fields = ['username', 'email', 'first_name', 'last_name']
    list_filter = ['is_active', 'is_staff', 'is_superuser', 'join_date']
    list_per_page = 10
    date_hierarchy = 'join_date'
    ordering = ['join_date']