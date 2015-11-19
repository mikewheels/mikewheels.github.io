# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('root', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='booking',
            name='mobile',
            field=models.CharField(null=True, max_length=50, blank=True),
        ),
    ]
