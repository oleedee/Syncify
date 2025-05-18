from dotenv import load_dotenv
import os
from spotify_auth import get_spotify_client

load_dotenv()
SPOTIFY_CLIENT_ID = os.getenv("SPOTIFY_CLIENT_ID")

def transfer_playlist(source, destination, playlist_):
    if source.lower() !="youtube" or destination.lower() != "spotify":
        raise ValueError("Currently, only Youtube to Spotify transfer is supported.")
    
    sp = get_spotify_client()

    youtube_tracks = mock_fetch_youtube_tracks(playlist_id)

    uris = search_spotify_uris(sp, youtube_tracks)

    user_id = sp.me()["id"]
    playlist = sp.user_playlist_create(user=user_id, name="Transfered Playlist from Youtube")