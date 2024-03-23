import Home from './pages/Home'
import Profile from "./pages/Profile"
import NotFoundPage from  './pages/NotFoundPage'
import Profiles from './pages/Profiles'
import "./index.css"
// import {BrowserRouter as Router, Route} from "react-router-dom"
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Results from './pages/Results'



const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />,
    // errorElement : <NotFoundPage  />
  },
  {
    path:"/results",
    element: <Results />,
  }

])




function App() {
  return (
      <div>
          <RouterProvider router={router} />
      </div>
  )
}

export default App
