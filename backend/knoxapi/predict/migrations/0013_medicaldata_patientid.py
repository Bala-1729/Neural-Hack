# Generated by Django 3.1 on 2020-09-18 07:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('predict', '0012_auto_20200910_0136'),
    ]

    operations = [
        migrations.AddField(
            model_name='medicaldata',
            name='patientId',
            field=models.CharField(max_length=256, null=True),
        ),
    ]
