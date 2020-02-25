from django.db.models import Q
from django.contrib.auth import authenticate
from rest_framework.serializers import ModelSerializer, ValidationError, EmailField, CharField
from rest_framework.authtoken.models import Token
from .models import User, Feedback

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'phone_number')

class SignupSerializer(ModelSerializer):
    def validate(self, attrs):
        email = attrs['email'].lower()
        if User.objects.filter(Q(email=email) | Q(phone_number=attrs['phone_number'])).exists():
            raise ValidationError("You are already registered with us!!!")
        return attrs
    def create(self, validated_data):
        password = validated_data.pop('password')
        validated_data['email'] = validated_data['email'].lower()
        user_obj = User.objects.create(**validated_data)
        user_obj.set_password(password)
        user_obj.save()
        Token.objects.create(user=user_obj)
        return user_obj
    class Meta:
        model = User
        fields = ('username', 'email', 'phone_number','password')

class LoginSerializer(ModelSerializer):
    email = EmailField(required=True, min_length=3, max_length=70)
    password = CharField(required=True, write_only=True, min_length=8, max_length=20)
    def validate(self, attrs):
        email = attrs['email'].lower()
        user_obj = authenticate(email=email, password=attrs['password'])
        if not user_obj:
            raise ValidationError("Please signup to continue!!")
        attrs['user'] = user_obj
        return attrs
    
    class Meta:
        model = User
        fields = ('email','password')

class FeedbackSerializer(ModelSerializer):
    class Meta:
        model = Feedback
        fields = '__all__'