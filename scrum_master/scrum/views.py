from django.shortcuts import render
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import JSONParser

from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
from chatterbot.trainers import ListTrainer

from rest_framework.response import Response
from rest_framework import generics, status, mixins

from django.conf import settings
from scrum.models import *
from scrum.serializers import *

import json

class ChatterBotApiView(generics.GenericAPIView):

    queryset = TrainModel.objects.all()
    serializer_class = TrainedModelSerializer

    chatterbot = ChatBot('un bot')
    trained = False

    def get(self, request, *args, **kwargs):
        #print(request.data['asd'])
        #chatbot = ChatBot('Ron Obvious')
        #print("creo el bot")

        #input_data = json.loads(request.body.decode('utf-8'))
        #input_ = input_data.get("input")
        print(request.data)
        input_ = request.data['input']
        #data = json.loads(request.data)
        #print(data)
        print(input_)

        """
        trainer = ChatterBotCorpusTrainer(self.chatterbot)

        if not self.trained:
            print("no ha sido entrenado")
            print("ENTRENANDO...")
            
            trainer.train(
                "{}scrum1.txt".format(settings.MEDIA_ROOT),
            )

            self.trained = True
        """
        
        response = self.chatterbot.get_response(input_)

        print(response)

        return Response(status=status.HTTP_200_OK)

    def post(self, request):

        self.chatterbot.storage.drop()

        title_ = request.data['title']
        desc_ = request.data['desc']

        newModel = TrainModel(title=title_, desc=desc_, plain_doc=request.FILES['document'])
        newModel.save()

        trainer = ListTrainer(self.chatterbot)

        file = open('.{}'.format(newModel.plain_doc.url))

        trainer.train([ line for line in file ])

        return Response(status=status.HTTP_200_OK)

    
    def delete(self, request):

        self.chatterbot.storage.drop()

        return Response(status=status.HTTP_200_OK)



class ChatterBotApiDetail(generics.GenericAPIView):

    queryset = TrainModel.objects.all()
    serializer_class = TrainedModelSerializer

    chatterbot = ChatBot('un bot')
    
    def put(self, request, pk):

        idDoc = request.data['pk']

        trainedModel = TrainModel.objects.get(pk=pk)

        if trainedModel is not None:
            self.chatterbot.storage.drop()

            trainer = ListTrainer(self.chatterbot)

            file = open('.{}'.format(trainedModel.plain_doc.url))

            trainer.train([ line for line in file ])

            return Response(status=status.HTTP_200_OK)
        
        return Response(status=status.HTTP_404_NOT_FOUND)


