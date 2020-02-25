from django.conf.urls import url
from apps.accounts import views
urlpatterns = [
    url('signup', views.SignupView.as_view({"post":"create"}),name='signup'),
    url('login', views.Login.as_view({"post":"create"}),name='login'),
    url('feedback', views.Feedback.as_view(),name='feedback'),


]
