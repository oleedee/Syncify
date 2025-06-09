import React, {useState} from 'react';
import { useNavigate } from "react-router-dom"
import "../App.css"

function View() {
const navigate = useNavigate();
const [search, setSearch] = useState('')

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
        link: '/playlist9'
    },

        {
        name: 'Dubstep',
        link: '/playlist10'
    },
]
    
return ( 
        <div className = "View"> 
        <div className = "Title">View</div>
        <div className = "search-wrapper">
            <label for = "search">Search Playlists</label> <br/>
            <input type = "search" id = "search" onChange={(e) => setSearch(e.target.value)}></input>
        </div>
            <ul className = "ViewPlaylists">
                {playlists.filter((pl) => {
                    return search.toLowerCase() === '' ? pl : pl.name.toLowerCase().includes(search.toLowerCase());
                }).map((playlist, key) => {
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