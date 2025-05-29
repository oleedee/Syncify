from flask import Flask, request, session, redirect, render_template, flash
from flask_session import Session
from spotify_auth import create_spotify_oauth, get_spotify_user, check_spot
from Yt_auth import youtube_oauth, check_yt, get_yt_user

app = Flask(__name__)
# app.jinja_env.filters["track_time"] = time_track
# app.jinja_env.filters["play_time"] = time_play

app.config["SESSION_PERMANENT"] = False 
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response

@app.route('/')
def index():
    return render_template('index.html')


#Route for authorization Page
@app.route('/auth', methods=['POST', 'GET'])
def authorize():
    if request.method == 'POST':
        service = request.form.get('connect')
        if service == 'spotify':
            sp_oauth = create_spotify_oauth()
            auth_url = sp_oauth.get_authorize_url()

            return(auth_url)
        elif service == 'youtube':
            yt_oauth = youtube_oauth()
            auth_url = yt_oauth.authorization_url()

            return redirect(auth_url[0])
        else:
            spot_auth = session.get('spot_token_info', None) != None
            yt_auth = session.get('yt_token_info', None) != None

            return render_template('', spot_auth=spot_auth, yt_auth=yt_auth)
        
# Routing for spotify playlists
# @app.route('/')


if __name__ == '__main__':
    app.run(debug=True)