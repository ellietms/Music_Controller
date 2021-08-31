from api.serializers import RoomSerializer
from rest_framework import generics
from .serializers import RoomSerializer
from .models import Room
# from django.http import HttpResponse
class RoomView(generics.CreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    
