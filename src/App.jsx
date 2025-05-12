import Homepage from './pages/Homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import './App.css'

const App = () => {
  return (
    <div className = "App">
    <Sidebar />
    <Footer />
    </div>
  )
}

export default App
