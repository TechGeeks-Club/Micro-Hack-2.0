from django.core.management import call_command
from django.test import TestCase

class YourTestCase(TestCase):
    fixtures = ['init_data.json']  # If you want to load fixtures automatically for all test methods

    def setUp(self):
        # Optional: You can manually load fixtures in the setUp method
        call_command('loaddata', 'init_data.json', verbosity=1)

    def test_something(self):
        # Your test code here
        pass
 