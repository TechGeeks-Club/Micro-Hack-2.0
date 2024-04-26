from django.contrib import admin
from .models import User
# Register your models here.

from django.contrib import messages
from django.utils.html import format_html

from django import forms

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email', 'first_name', 'last_name','phone', 'join_date','is_active', 'is_staff', 'is_superuser' ]
    search_fields = ['username', 'email', 'first_name', 'last_name']
    list_filter = ['is_active', 'is_staff', 'is_superuser', 'join_date']
    list_per_page = 10
    date_hierarchy = 'join_date'
    ordering = ['join_date']
    def save_model(self, request, obj, form, change):
        if change:
            if not request.user.is_superuser and obj.is_superuser:
                messages.error(request, 'you dont have the permrmision to update a superMember informations')
                return
        # Check if a new password is provided
        password = form.cleaned_data.get('password')
        
         #! check if the password is already exists
        if password:
            if str(password).startswith("pbkdf2_sha256$"):
                obj.password = password
            else :
                obj.set_password(password)

        super().save_model(request, obj, form, change) 