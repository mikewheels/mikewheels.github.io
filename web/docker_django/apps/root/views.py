from django.views import generic as generic_views
from django.http import JsonResponse


class Home(generic_views.TemplateView):

    def get_context_data(self, **kwargs):
        context = super(Home, self).get_context_data(**kwargs)
        return context


class Contact(generic_views.CreateView):

    def form_valid(self, form):
        self.object = form.save()
        return JsonResponse({
            'success': True
        })
