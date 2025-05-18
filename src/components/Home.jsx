import "../App.css"
import { HomeContents } from "./HomeContents"
import { useNavigate } from "react-router-dom"

function Home ()  {
    const navigate = useNavigate();

    return (
        <div className = "Home"> 
        <div className = "Title">Syncify</div>
            <ul className = "HomeContents">
                {HomeContents.map((val, key) => {
                    return(
                        <li key = {key}
                        className = "box"
                        onClick={() => {navigate(val.link);
                        }}>
                            <div>{val.title}</div>
                        </li>
                    )
                })}
            </ul>
        </div>

    )

}

export default Home;