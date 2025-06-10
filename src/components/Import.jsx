import React, {useState} from 'react';
import { useNavigate } from "react-router-dom"
import "../App.css"

function Import() {
const navigate = useNavigate();

const services = [
    'Spotify',
    'YouTube',
    'Soundcloud',
    'Deezer',
    'Jamendo'
]

return ( 
        <div className = "View"> 
        <div className = "Title">Import From</div>
            <ul className = "HomeContents">
                {services.map((key) => {
                    return(
                        <li key = {key}
                        className = "box"
                        onClick={() => {navigate(key)}
                        }>
                            <div>{key}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
)

}

export default Import