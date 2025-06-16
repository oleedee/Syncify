from flask import Flask, request, jsonify
from flask_session import Session

from spotify_auth import create_spotify_oauth, get_spotify_user, check_spot
from Yt_auth import youtube_oauth, check_yt, get_yt_user

from Models.User import User 
from Models.Playlist import Playlist

app = Flask(__name__)

app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

app.route('/create_user', methods=['POST'])
def create_user():
    data = request.json
    user = User(username=data.get("username"), email=data.get("email"))
    user.save()
    return jsonify({"message": "User created", "user_id": user.id})

@app.route('/create_playlist', methods=['POST'])
def create_playlist():
    data = request.json
    playlist = Playlist(
        name=data.get("name"),
        origin_service=data.get("origin_service"),
        song_json=data.get("songs_json", []),
        user_id=data.get("user_id")
    )
    playlist.save()
    return jsonify({"message": "Playist created", "playlists_id": playlist.id})



if __name__ == '__main__':
    app.run(debug=True)