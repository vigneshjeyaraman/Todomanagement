from django.conf.urls import url
from django.urls import include
from rest_framework import routers
from apps.todos import views
router = routers.DefaultRouter()
router.register(r'', views.TodoViewSet)
urlpatterns = [
    url('^',include(router.urls))
]
