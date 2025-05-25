import React, {useState} from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Profile() {
    return <div className = 'Profile'>
        <div className="Title">Profile</div>
        <div className ="Profilebox">
            <div className = "User-area">

                <div className='User'></div>
                <div className='User-info'>
                <div className='Username'>User</div>
                <div style={{fontSize : 15}}># Playlists • Syncing Since 20XX • Connected to # Services</div>
                </div>
            </div>
            
            <div className="Linked-Accs">Linked Accounts
                <div className = "Services">
                    <div className = "Service">Spotify</div>
                    <div className = "Service">Spotify</div>
                    <div className = "Service">Spotify</div>
                    <div className = "Service">Spotify</div>
                    <div className = "Service">Spotify</div>
                    </div>
            </div>
            <div className = "Playlist-box">
                <div>Playlists</div><div>See All</div>
                </div>
            </div>
        </div>
}

export default Profile;