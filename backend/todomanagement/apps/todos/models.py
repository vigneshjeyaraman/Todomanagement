from django.db import models
from apps.accounts.models import BaseModel, User

class Todo(BaseModel):
    title = models.CharField('Title', max_length=30, null=False, blank=False)
    description = models.CharField('Description', max_length=100, null=False, blank=False)
    deadline = models.DateField(null=True, blank=True)
    is_finished = models.BooleanField(default=False)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="todo")
    class Meta:
        ordering = ['-updated_at']