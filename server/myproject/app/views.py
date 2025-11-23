from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken

@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    try:
        data = request.data
        print("Received data:", data)  
        required_fields = ['first_name', 'last_name', 'email', 'password', 'confirm_password']
        for field in required_fields:
            if not data.get(field):
                return Response(
                    {'error': f'{field} is required'}, 
                    status=status.HTTP_400_BAD_REQUEST
                )
        
        if data['password'] != data['confirm_password']:
            return Response(
                {'error': 'Passwords do not match'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
     
        if User.objects.filter(email=data['email']).exists():
            return Response(
                {'error': 'User with this email already exists'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
   
        user = User.objects.create_user(
            username=data['email'],  # Use email as username
            email=data['email'],
            password=data['password'],
            first_name=data['first_name'],
            last_name=data['last_name']
        )
      
        refresh = RefreshToken.for_user(user)
        
        return Response({
            'message': 'User registered successfully!',
            'user': {
                'id': user.id,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'email': user.email
            },
            'tokens': {
                'access': str(refresh.access_token),
                'refresh': str(refresh),
            }
        }, status=status.HTTP_201_CREATED)
        
    except Exception as e:
        print("Error:", str(e))  # Debug print
        return Response(
            {'error': str(e)}, 
            status=status.HTTP_400_BAD_REQUEST
        )