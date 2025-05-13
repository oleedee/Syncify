import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import './App.css';

const App = () => {
  return (
    <div className = "App">
      <div className='page-wrapper'>
        <Sidebar />
      <div className ='main-content'><Home /></div>
      </div>
      <Footer />
    </div>
  )
}

export default App
