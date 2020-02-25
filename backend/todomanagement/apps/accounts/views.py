from rest_framework import mixins, viewsets, views
from .serializers import SignupSerializer, UserSerializer, LoginSerializer, FeedbackSerializer
from utils import serializer_validation
from response import CustomResponse
from rest_framework.authtoken.models import Token

class SignupView(mixins.CreateModelMixin, viewsets.GenericViewSet):

    def create(self, request):
        user_obj = serializer_validation(SignupSerializer, request.data)
        serializer = UserSerializer(user_obj)
        token, created = Token.objects.get_or_create(user=user_obj).first()
        data = serializer.data
        data.update({"token":token.key})
        return CustomResponse(data)

class Login(mixins.CreateModelMixin, viewsets.GenericViewSet):

    def create(self, request):
        print("vvvvv",request.data)
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user_obj = serializer.validated_data.get('user')
        serializer = UserSerializer(user_obj)
        token, created = Token.objects.get_or_create(user=user_obj)
        data = serializer.data
        data.update({"token":token.key})
        return CustomResponse(data)

class Feedback(views.APIView):
    def post(self, request):
        serializer = FeedbackSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return CustomResponse({"message":"We will reach out to you soon :)."})