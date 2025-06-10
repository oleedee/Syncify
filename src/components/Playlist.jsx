import "../App.css"
import {useState} from 'react';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

function Playlist() {
  const [playlistName, setPlaylistName] = useState('');  
  const [playlist, setPlaylist] = useState([]);

  console.log(playlist)

  const changeSong = (index, newValue, choice) => {
    const updated = [...playlist];
    updated[index][choice] = newValue;
    setPlaylist(updated);
  }

  const addSong = () => {
    setPlaylist([...playlist, ['','']])
  }

  const deleteSong = (index) => {
    console.log(index);
    const updated = [...playlist];
    updated.splice(index, 1);
    setPlaylist(updated);
  }
    
    return <div className = 'Create'>
        <div className="Title">Create</div>
        <div className ="Centerbox">
            <div className = "User-area">

                <div className='User'></div>
                <div className='User-info'>
                <div className='Username'>
                  <input placeholder="Name Playlist" onChange={(e) => setPlaylistName(e.target.value)} className="playlist-input"/>
                  </div>
                </div>
            </div>
            <ul>
              {playlist.map((val, index) => {
                return (
                  <li key = {index}>
                  <input placeholder="Song" value = {playlist[index][0]} onChange = {(e) => changeSong(index,e.target.value, 0)}></input>
                  <input placeholder="Artist" value = {playlist[index][1]} onChange = {(e) => changeSong(index,e.target.value, 1)}></input>
                  <RemoveCircleIcon onClick = {(e) => deleteSong(index)}/>
                  </li>
                )
              })}
            </ul>
            <button className="addSong" onClick = {addSong}><ControlPointIcon/></button>

            </div>
        </div>
}

export default Playlist