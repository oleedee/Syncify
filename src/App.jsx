import Homepage from './pages/Homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

const App = () => {
  return (
    <>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>
    <Router>
      <Routes>
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
