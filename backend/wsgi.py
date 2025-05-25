import os
import sys

# Replace with your Django project name
sys.path.append(os.path.dirname(_file_))
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "predictor.settings")

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()