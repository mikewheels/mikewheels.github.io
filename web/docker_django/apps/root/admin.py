from django.contrib import admin

from . import models


admin.site.register(models.BookingAdditionalService)
admin.site.register(models.Booking)
admin.site.register(models.ContactMessage)
