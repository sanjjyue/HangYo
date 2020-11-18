from .base import *

ALLOWED_HOSTS = ['*']

DEBUG = False

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'hangyo_deploy',
        'USER': 'lee',
        'PASSWORD': '',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}


# DB_PW = config_secret_develop['django']['db']['password']
# DB_NAME = config_secret_develop['django']['db']['name']
# DB_USER = config_secret_develop['django']['db']['user']
# DB_HOST = config_secret_develop['django']['db']['host']
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql',
#         'NAME': DB_NAME,
#         'USER': DB_USER,
#         'PASSWORD': DB_PW,
#         'HOST': DB_HOST,
#         'PORT': '5432',
#     }
# }