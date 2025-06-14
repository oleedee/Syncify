import React, {useState} from 'react';
import { useNavigate } from "react-router-dom"
import "../App.css"

function ImportedPlaylists() {
const navigate = useNavigate();
const [search, setSearch] = useState('')
const [selected, setSelected] = useState([])
console.log(selected)

const handleSelect = (playlist) => {
    if(selected.includes(playlist.name)) {
        setSelected(selected.filter(p => p != playlist.name))
    } else {
        setSelected([...selected, playlist.name]); 
    }
}

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
        <div className = "Title">Import</div>
        <div className = "search-wrapper">
            <div className = "import-header">
                <div>
                <label htmlFor = "search">Search Playlists</label> <br/>
                <input type = "search" id = "search" onChange={(e) => setSearch(e.target.value)}></input>
                </div>
                <h1 className = "Header">Please Select Playlists to Import to Syncify.</h1>
            </div>
        </div>
            <ul className = "ViewPlaylists">
                {playlists.filter((pl) => {
                    return search.toLowerCase() === '' ? pl : pl.name.toLowerCase().includes(search.toLowerCase());
                }).map((playlist, key) => {
                    let className = 'box'
                    if((selected.includes(playlist.name))) {
                            className += ' selected'
                        }

                    return(
                        <li key = {key}
                        className = {className}
                        onClick={() => {handleSelect(playlist);
                        }}>
                            <div>{playlist.name}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
)
}

export default ImportedPlaylists