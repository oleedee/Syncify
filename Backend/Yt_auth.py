from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build
from flask import session, redirect, flash

def youtube_oauth():
    flow = InstalledAppFlow.from_client_secrets_file('clients_secret.json',
                                                     redirect_uri= )

