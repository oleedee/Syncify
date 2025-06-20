import "../App.css"
import { SidebarData } from './SidebarData'
import { useNavigate } from "react-router-dom"

function Sidebar() {
    const navigate = useNavigate();

    return( 
        <div className = "Sidebar">
            <ul className = "SidebarList">
            {SidebarData.map((val, key) => {
                return (
                <li key = {key}
                className="row"
                onClick={() => {navigate(val.link)}
                }> 
                <div id = "icon">{val.icon}</div> 
                <div id = "title">{val.title}</div>
                </li>
                )
            })}
            </ul>
                <>
                </>
        </div>
    )

}

export default Sidebar 