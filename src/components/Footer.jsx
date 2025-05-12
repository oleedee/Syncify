import "../App.css"
import { FooterContents } from "./FooterContents"

function Footer() {
    return( <div className= "Footer">
        <ul className = "FooterContents">
            {FooterContents.map((val,key) => {
                return (
                <li key = {key}
                className="text"
                onClick={() => {window.location.pathname = val.link;

                }}> 
                <div id = "title">{val.title}</div> 
                </li>
                )
            })}
        </ul>
    </div>
    )
}

export default Footer