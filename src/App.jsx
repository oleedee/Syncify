import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
    <div className = "App">
      <div className='page-wrapper'>
        <Sidebar />
      <div className ='main-content'>
        <Routes>
          <Route path = "/" element={<Home/>} />
          <Route path = "/about" element={<About/>} />
        </Routes>
        </div>
      </div>
      <Footer />
    </div>
    </Router>
  )
}

export default App
