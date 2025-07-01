import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate()

    useEffect(() => {
        const doLogout = async () => {
            try {
                const response = await signOut(auth)
                navigate("/")  
            } catch (error) {
                console.log(error.response)
            }
    }

    doLogout();

    }, [navigate]);
    
    return <div>Logging out...</div>
}
export default Logout