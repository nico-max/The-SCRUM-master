from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

app_name='bot'

urlpatterns = [
    path('question/', views.llamar_bot, name='question'),
]