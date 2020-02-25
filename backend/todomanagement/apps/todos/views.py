from rest_framework import viewsets, permissions
from .serializers import TodoSerializer, ListTodoSerializer
from pagination import Pagination
from .models import Todo    
from response import CustomResponse
class TodoViewSet(viewsets.ModelViewSet):
    pagination_class = Pagination
    permission_classes = (permissions.IsAuthenticated,)
    queryset = Todo.objects.all()
    def get_queryset(self):
        return self.queryset.filter(owner = self.request.user)
    def get_serializer_class(self):
        if self.action == 'create' or self.action=='update':
            return TodoSerializer
        return ListTodoSerializer
    
    def update(self, request, pk=None):
        todo_obj = self.get_queryset().filter(id=pk).first()
        serializer = TodoSerializer(data=request.data,instance=todo_obj, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return CustomResponse(serializer.data)