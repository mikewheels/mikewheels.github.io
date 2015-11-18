from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$',
        views.Home.as_view(template_name='home.html'),
        name='home'),
]
