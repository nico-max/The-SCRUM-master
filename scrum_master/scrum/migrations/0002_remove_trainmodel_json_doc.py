# Generated by Django 4.1.3 on 2022-11-23 21:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('scrum', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='trainmodel',
            name='json_doc',
        ),
    ]