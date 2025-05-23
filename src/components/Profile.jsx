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
                <div style={{fontSize : 10}}># Playlists • Syncing Since 20XX • Connected to # Services</div>
                </div>
            </div>
            
            <div>Linked Accounts</div>
            <div className = "Playlist-box">
                <div>Playlists</div><div>See All</div>
                </div>
            </div>
        </div>
}

export default Profile;