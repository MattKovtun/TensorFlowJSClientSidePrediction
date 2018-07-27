import sys
import logging
logging.basicConfig(stream=sys.stderr)
sys.path.insert(0,"/var/www/TensorFlowJSClientSidePredictionWorkshop/")

from app import app as application
application.secret_key = 'Matt@123'