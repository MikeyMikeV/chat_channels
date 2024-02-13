from django.shortcuts import render
from .models import Room, Message

def room_list(request):
    context = {
        'rooms': Room.objects.all()
    }

    return render(request, 'room_list.html', context)

def room_detail(request, room_name):
    chat_room, created = Room.objects.get_or_create(name = room_name)
    chat_log = Message.objects.filter(room = chat_room)
    context = {
        'chat_room':chat_room,
        'chat_log':chat_log
    }
    return render( request, 'room_detail.html', context)