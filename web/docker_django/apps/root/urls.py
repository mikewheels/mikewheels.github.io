from django.conf.urls import url

from . import views, forms

urlpatterns = [
    url(r'^$',
        views.Home.as_view(template_name='home.html'),
        name='home'),

    url(r'^contact/$',
        views.Contact.as_view(form_class=forms.ContactForm),
        name='contact'),

    url(r'^book/$',
        views.Contact.as_view(form_class=forms.BookForm),
        name='book'),
]
