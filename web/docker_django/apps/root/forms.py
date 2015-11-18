from django import forms

from . import models


class ContactForm(forms.ModelForm):

    class Meta:
        model = models.ContactMessage
        fields = ['name', 'email', 'message']


class BookForm(forms.ModelForm):

    class Meta:
        model = models.Booking
        fields = ['first_name', 'last_name', 'email',
                  'book_date', 'additional_services', 'message']
