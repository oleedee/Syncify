import React, {useState} from 'react';
import { useNavigate } from "react-router-dom"
import "../App.css"

function View() {
const navigate = useNavigate();
const playlists = [
    {
        name: 'Hip-Hop',
        link: '/playlist1'
    },

    {
        name: 'R&B',
        link: '/playlist2'
    },

    {
        name: 'Alternative',
        link: '/playlist3'
    },

    {
        name: 'Jazz',
        link: '/playlist4'
    },

    {
        name: 'Country',
        link: '/playlist5'
    },

    {
        name: 'Pop',
        link: '/playlist6'
    },

    {
        name: 'Experimental Hip-Hop',
        link: '/playlist7'
    },

        {
        name: 'Metal',
        link: '/playlist8'
    },

        {
        name: 'Instrumental',
        link: '/playlist4'
    },
]
    
return ( 
        <div className = "Home"> 
        <div className = "Title">View</div>
            <ul className = "ViewPlaylists">
                {playlists.map((playlist, key) => {
                    return(
                        <li key = {key}
                        className = "box"
                        onClick={() => {navigate(playlist.link);
                        }}>
                            <div>{playlist.name}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
)
}

export default View;