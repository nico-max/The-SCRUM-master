from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

app_name='bot'

urlpatterns = [
    path('conversation/', views.ChatterBotApiView.as_view()),
    path('conversation/<int:pk>', views.ChatterBotApiDetail.as_view()),
]