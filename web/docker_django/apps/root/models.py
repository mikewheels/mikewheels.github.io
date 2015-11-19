from django.db import models


class BookingAdditionalService(models.Model):
    title = models.CharField(max_length=255)
    price = models.DecimalField(
        max_digits=6,
        decimal_places=2,
        blank=True,
        null=True)

    def __str__(self):
        return '%s' % self.title


class Booking(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    mobile = models.CharField(max_length=50, blank=True, null=True)
    book_date = models.DateTimeField()
    additional_services = models.ManyToManyField(
        BookingAdditionalService,
        blank=True,
        null=True)
    message = models.TextField(blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return '%s %s' % (self.first_name, self.last_name)


class ContactMessage(models.Model):
    name = models.CharField(max_length=512)
    email = models.EmailField()
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return '%s' % self.name
