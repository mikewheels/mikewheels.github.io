from django.conf.urls import url

from honeypot.decorators import check_honeypot

from . import views, forms

urlpatterns = [
    url(r'^$',
        views.Home.as_view(template_name='home.html'),
        name='home'),

    url(r'^contact/$',
        check_honeypot(views.Contact.as_view(form_class=forms.ContactForm)),
        name='contact'),

    url(r'^book/$',
        check_honeypot(views.Contact.as_view(form_class=forms.BookForm)),
        name='book'),
]
