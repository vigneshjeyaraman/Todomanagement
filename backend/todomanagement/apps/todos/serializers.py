from rest_framework.serializers import ModelSerializer, ValidationError
from .models import Todo
from apps.accounts.serializers import UserSerializer
class TodoSerializer(ModelSerializer):
    def validate(self, attrs):
        if not attrs.get('title') or not attrs.get('description'):
            raise ValidationError("Please provide title and description of todo")
        return attrs
    
    def create(self, validated_data):
        todo_obj = Todo.objects.create(owner=self.context['request'].user, **validated_data)
        return todo_obj
    
    # def update(self, instance, validate_data):
    #     print(validate_data)
    #     todo_obj = Todo.objects.filter(id=instance.id).update(**validate_data)
    #     return todo_obj

    class Meta:
        model = Todo
        exclude = ('owner','created_at','updated_at')

class ListTodoSerializer(ModelSerializer):
    owner = UserSerializer()
    class Meta:
        model = Todo
        fields = ('__all__')        