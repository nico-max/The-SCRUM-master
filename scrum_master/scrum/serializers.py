from rest_framework import exceptions, serializers
from scrum.models import *

class TrainedModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = TrainModel
        fields = ('id',
                  'title',
                  'desc',
                  'plain_doc')
