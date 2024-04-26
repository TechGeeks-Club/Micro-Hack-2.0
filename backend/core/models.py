from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager,PermissionsMixin
from django.utils import timezone

from django.contrib.auth.models import Group, Permission

from django.utils.html import mark_safe

# User
class UserManager(BaseUserManager):
    def create_user(self ,username,password):
        
        user = self.model(username=username)
      
        user.set_password(password)
        user.save(using=self._db)
        return user

    
    def create_superuser(self ,password,username):
        user = self.model(username=username)
        
        #to input the first_name and last_name
        user.is_admin         = True
        user.is_staff         = True
        user.is_superuser     = True
        user.verified_badge   = True
        user.set_password(password)
        user.save(using=self._db)
        return user
        
def get_image_path(instance, filename):
    return '/'.join(['profile_pics',instance.username, filename])

class User(AbstractBaseUser,PermissionsMixin):
    username             = models.CharField(unique=True,max_length=50)
    
    email                = models.EmailField(unique=True,null=True,max_length=254)
    phone                = models.CharField(max_length=15,blank=True,null=True)
    
    profile_pic          = models.ImageField(upload_to='profile_pics/',blank=True,null=True)
    
    first_name           = models.CharField(max_length=150)
    last_name            = models.CharField(max_length=150)

    join_date            = models.DateTimeField(blank=True,null=True,default=timezone.now)
    birthday             = models.DateField(blank=True,null=True)
    
    is_active            = models.BooleanField(default=True)
    is_superuser         = models.BooleanField(default=False)
    is_admin             = models.BooleanField(default=False)
    is_staff             = models.BooleanField(default=False)
    
    groups               = models.ManyToManyField(Group, related_name='api_users')
    team_staff           = models.ManyToManyField(Group, related_name='team_staff', blank=True) # just temporary to avoid migration issues
    
    user_permissions     = models.ManyToManyField(Permission, related_name='api_user_permissions')    
    
    objects = UserManager()
    
    USERNAME_FIELD = "username"
    REQUIRED_FIELDS =[  ]
    
    class Meta:
        verbose_name = ("User")
        verbose_name_plural = ("Users")