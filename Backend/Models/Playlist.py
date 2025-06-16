from firebase import db

class Playlist:
    def __init__(self, id=None, name=None, origin_service=None, song_json=None, user_id=None):
       self.id = id 
       self.name = name
       self.origin_service = origin_service
       self.songs_json = song_json or []
       self.user_id = user_id

    def to_dict(self):
        return {
            "name": self.name,
            "origin_service": self.origin_service,
            "songs_json": self.songs_json,
            "user_id": self.user_id
        }
    
    def save(self):
        if self.id:
            ref = db.collection("playlists").document(self.id)
        else:
            ref = db.collection("playlists").document()
            self.id = ref.id
        ref.set(self.to_dict())

    @staticmethod
    def get_by_id(playlist_id):
        doc = db.collection("playlists").document(playlist_id).get()
        if doc.exists:
            data = doc.to_dict()
            return Playlist(
                id=playlist_id,
                name=data.get("name"),
                origin_service=data.get("origin_service"),
                song_json=data.get("songs_json"),
                user_id=data.get("user_id")
            )
        return None
    

    