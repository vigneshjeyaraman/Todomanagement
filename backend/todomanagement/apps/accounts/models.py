from django.db import models
from django.contrib.auth.models import AbstractUser

class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now = True)

class User(AbstractUser, BaseModel):
    email = models.EmailField('Email', unique=True, blank=False, null=False)
    username = models.CharField('Username', null=False, blank=False, max_length=25)
    phone_number = models.CharField('Phone Number', null=False, blank=False, max_length=30)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ('username',)

    class Meta:
        ordering = ['id']

class Feedback(BaseModel):
    first_name = models.CharField('FirstName', null=False, blank=False,max_length=20)
    last_name = models.CharField('LastName', null=False, blank=False,max_length=20)
    email = models.EmailField('Email', blank=False, null=False)
    query = models.TextField('Query', null=True, blank=True)
