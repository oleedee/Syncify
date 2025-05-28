from flask import Flask, request, session, redirect, render_template, flash
from flask_session import Session
from spotify_auth import create_spotify_oauth, get_spotify_user, check_spot
from Yt_auth import youtube_oauth, check_yt, get_yt_user

app = Flask(__name__)
app.jinja_env.filters["track_time"] = time_track
app.jinja_env.filters["play_time"] = time_play
