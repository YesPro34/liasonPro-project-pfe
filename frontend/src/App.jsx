import Home from './pages/Home'
import Footer from './components/Footer'
import Results from "./pages/Results"
import NavBar from './components/NavBar'
import "./index.css"
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import {FormContext} from "./contexts/FormVisibilityContext"
import { UserContextProvider } from './contexts/userContext'




function App() {



  return (
    <UserContextProvider>
      <FormContext>
          <BrowserRouter>
            <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/results" element={<Results />} />
                </Routes>
              <Footer />
          </BrowserRouter>
        </FormContext>
    </UserContextProvider>
  )
}

export default App
