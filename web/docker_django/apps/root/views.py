from django.views import generic as generic_views


class Home(generic_views.TemplateView):

    def get_context_data(self, **kwargs):
        context = super(Home, self).get_context_data(**kwargs)
        return context
