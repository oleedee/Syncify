from firebase import db

class Song:
    def __init__(self, id=None, title=None, artist=None, duration=None, playlist_id=None):
        self.id = id
        self.title = title
        self.artist = artist
        self.duration = duration
        self.playlist_id = playlist_id

    def to_dict(self):
        return{
            "title": self.title,
            "artist": self.artist,
            "duration": self.duration,
            "playlist_id": self.playlist_id
        }
    def save(self):
        if self.id:
             ref = db.collection("songs").document(self.id)
        else:
            ref = db.collection("songs").documant()
            self.id = ref.id
        ref.set(self.to_dict())

    @staticmethod
    def get_by_id(song_id):
        doc = db.collection("songs").document(song_id).get()
        if doc.exists:
            data = doc.to_dict()
            return Song(
                id=song_id,
                title=data.get("title"),
                artist=data.get("artist"),
                duration=data.get("duration"),
                playlist_id=data.get("playlist_id")
            )
        return None
    
