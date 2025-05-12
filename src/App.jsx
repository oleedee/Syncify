import Homepage from './pages/Homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import './App.css'

const App = () => {
  return (
    <div className = "App">
      <div className='page-wrapper'>
        <Sidebar />
      <div className ='main-content'>Syncify</div>
      </div>
      <Footer />
    </div>
  )
}

export default App
