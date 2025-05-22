from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build
from flask import session, redirect, flash

def youtube_oauth():
    flow = InstalledAppFlow.from_client_secrets_file('clients_secret.json',
                                                     redirect_uri='http://127.0.0.1:5000/redirectyoutube',
                                                      scopes=['https://www.googleapis.com/auth/youtubepartner',
                                                        'https://www.googleapis.com/auth/youtube',
                                                        'https://www.googleapis.com/auth/youtube.force-ssl'] )
    return  flow


def check_yt():
    credentials = session.get('yt_token_info', None)

    if not credentials or not credentials.valid:
        if credentials and credentials.expired and credentials.refresh_token:
            credentials.refresh(Request())
        else:
            flash('Youtube account authorization needed!')
            return redirect('/')
        
        session['yt_token_info'] = credentials



