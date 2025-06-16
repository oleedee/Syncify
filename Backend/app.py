from flask import Flask, request, session, redirect, render_template, flash
from flask_session import Session
from spotify_auth import create_spotify_oauth, get_spotify_user, check_spot
from Yt_auth import youtube_oauth, check_yt, get_yt_user

app = Flask(__name__)

app.config["SESSION_PERMANENT"] = False 
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

@app.route('/')
def index():
    return "Waagwan!"

@app.route('/hello')
def hello():
    return "Bryan, You're the greatest!"


if __name__ == '__main__':
    app.run(debug=True)