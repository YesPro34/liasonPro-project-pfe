import Home from './pages/Home'
import "./index.css"
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import LogiIn from './pages/LogiIn'




function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogiIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
