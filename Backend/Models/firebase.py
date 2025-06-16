import firebase_admin
from firebase_admin import credentials,firestore

cred = credentials.Certificate("Syncify\Backend\syncify-1cd0d-firebase-adminsdk-fbsvc-b51414bb59.json")
if not firebase_admin._apps:
    firebase_admin.initialize_app(cred)

db = firestore.client()
