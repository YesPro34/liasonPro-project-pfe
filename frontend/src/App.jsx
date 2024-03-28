import Home from './pages/Home'
import Footer from './components/layouts/Footer'
import Results from "./pages/Results"
import NavBar from './components/layouts/NavBar'
import "./index.css"
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import {FormContext} from "./contexts/FormVisibilityContext"
import { UserContextProvider } from './contexts/userContext'
import {Toaster} from "react-hot-toast"



function App() {



  return (
    <UserContextProvider>
      <FormContext>
          <BrowserRouter>
            <NavBar />
            <Toaster position="top-center" toastCaptions={{duration:1000}}/>
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
