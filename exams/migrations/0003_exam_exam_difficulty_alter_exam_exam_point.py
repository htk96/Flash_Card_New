# Generated by Django 4.2.4 on 2023-08-25 03:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('exams', '0002_exam_exam_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='exam',
            name='exam_difficulty',
            field=models.IntegerField(default=1),
        ),
        migrations.AlterField(
            model_name='exam',
            name='exam_point',
            field=models.FloatField(),
        ),
    ]