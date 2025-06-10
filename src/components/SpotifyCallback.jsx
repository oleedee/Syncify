import { Navigate } from "react-router-dom"

function SpotifyCallback() {

    const navigate = useNavigate();
    try {
    // connect user
    navigate("/settings")
    } catch (error) {
        console.log(error)
        navigate("/error")
    }
}

export default YouTubeCallback