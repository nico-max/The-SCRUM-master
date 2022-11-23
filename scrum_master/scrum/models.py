from django.db import models

# Create your models here.

class TrainModel(models.Model):
    title = models.CharField(max_length=120)
    desc = models.CharField(max_length=500, blank= True)
    plain_doc = models.FileField(upload_to='training_files')

    def __str__(self):
        return "{} - {}... (DRAFT)".format(self.title, self.desc[20:])