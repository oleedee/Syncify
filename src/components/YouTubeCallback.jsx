import { Navigate } from "react-router-dom"

function YouTubeCallback() {

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