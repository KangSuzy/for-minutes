# Generated by Django 3.2 on 2021-04-16 10:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Hi',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full', models.TextField()),
                ('summarie', models.TextField()),
                ('keyword', models.CharField(max_length=200)),
            ],
        ),
    ]
