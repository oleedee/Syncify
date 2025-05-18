import "../App.css"
import { HomeContents } from "./HomeContents"

function Home ()  {
    return (
        <div className = "Home"> 
        <div className = "Title">Syncify</div>
            <ul className = "HomeContents">
                {HomeContents.map((val, key) => {
                    return(
                        <li key = {key}
                        className = "box"
                        onClick={() => {window.location.pathname = val.link;
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