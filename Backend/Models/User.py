from firebase import db

class UserNotFoundError(Exception):
    pass
 
class User:
    def __init__(self, id=None, username=None, email=None):
        self.id = id
        self.username = username
        self.email = email
    
    def to_dict(self):
        return{
            "username":self.username,
            "email": self.email
        }
    
    def save(self):
        if self.id:
            ref = db.collection("users").document(self.id)
        else: 
            ref = db.collection("users").document()
            self.id = ref.id
        ref.set(self.to_dict())

    @staticmethod
    def get_by_id(user_id):
        doc = db.collection("users").document(user_id).get()
        if doc.exists:
            data = doc.to_dict()
            return User(id=user_id, username=data.get("username"), email=data.get("email"))
        raise UserNotFoundError(f"No user found with ID: {user_id}")
