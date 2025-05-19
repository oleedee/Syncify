import spotipy
from spotipy.oauth2 import SpotifyOAuth
import os
from dotenv import load_dotenv

load_dotenv()

CLIENT_ID = os.getenv('SPOTIFY_ID')
CLIENT_SECRET = os.getenv('SPOTIFY_SECRET')

def get_spotify_user():
    token_info = session['spot_token_info']
    return spotipy.Spotify(auth=token_info['access_token'])

def check_spot():
    token_info = session.get('spot_token_info', None)
    if token_info:
        if token_info['expires_at'] - int(time.time()) < 60:
            sp_oauth = create_spotify_oauth()
            token_info = sp_oauth.refresh_access_token(token_info['refresh_token'])
    else:
        flash('Spotify account authorization needed!')
        return redirect('/')
    
    session['spot_token_info'] = token_info



