from spotify_auth import get_spotify_client

def main():
    sp = get_spotify_client()
    playlists = sp.current_user_playlists()

    print("Your Spotify playlists:")
    for playlist in playlists['items']:
        print(f"- {playlist['name']} (ID: {playlsit['id']})")

if __name__ == "__main__":
    main()