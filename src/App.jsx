import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import View from "./components/View";
import Playlist from "./components/Playlist";
import Import from "./components/Import"
import ImportedPlaylists from "./components/ImportedPlaylists";
import { ProtectedRoute } from "./components/protectedRoute.jsx";
import { onAuthStateChanged } from 'firebase/auth'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { auth } from "./firebase.js";
import './App.css';
import { useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';


function App () {
    const [user] = useAuthState(auth)
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if(user) {
          setIsFetching(false)
          return;
        }
        setIsFetching(false)
      })

      return () => unsubscribe();
    }, [])

    if(isFetching) {
      return <div>Fetching...</div>
    }


  return (
    <Router>
    <div className = "App">
      <div className='page-wrapper'>
        <Sidebar />
      <div className ='main-content'>
        <Routes>
          <Route path = "/" element={<Home/>} />
          <Route path = "/about" element={<About/>} />
          <Route path = "/settings" element={<Settings/>} />
          <Route element={<ProtectedRoute user={user} />}>
            <Route path = "/profile" element={<Profile/>} />
            <Route path = "/view" element={<View/>} />
            <Route path = "/playlist/:id" element={<Playlist/>}/>
            <Route path = "/import" element={<Import/>}/>
            <Route path = "/import/:id" element={<ImportedPlaylists/>}></Route>
        </Route>
        </Routes>
        </div>
      </div>
      <Footer />
    </div>
    </Router>
  )
}

export default App
