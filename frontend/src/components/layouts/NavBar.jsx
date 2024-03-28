import { useContext, useState } from 'react';
import ButtonComponent from '../ButtonComponent'
import Logo from "../Logo"
import MenuIcon from '@mui/icons-material/Menu';
import {FormVisibilityContext} from '../../contexts/FormVisibilityContext';
import {userContext} from "../../contexts/userContext"
import axios from "axios"
import {toast} from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const NavBar = () => {
  
  const {toggleLoginForm , toggleSignInForm} = useContext(FormVisibilityContext)

  const {user,setUser} = useContext(userContext)

  const navigate = useNavigate()
  
  const [buttonsVisible, setButtonsVisible] = useState(false);

  const toggleButtons = () => {
    setButtonsVisible(!buttonsVisible);
  }

  const handleLogout = async () => {
    try{
      const response = await axios.post("http://localhost:5000/api/v1/users/logout")
      console.log(response)
      if(response.status === 200){
        toast.success("Logged out successfully")
        setUser(null)
        navigate("/")
      }
    }catch(error){
      console.log(error)
    }
  }


  return (
    <nav className='flex justify-between items-center px-5 py-3 fixed top-0 left-0 right-0 bg-[#1e2e3e] '>
      <div className='ml-4'>
          <Logo />
      </div>
      <div className={`lg:flex space-x-4 ${buttonsVisible ? 'flex' : 'hidden'}`}>
        {!user ?
           (     
            <>  
            <ButtonComponent  onClick={toggleSignInForm}   className="bg-[#cdb091] border rounded-3xl border-[#cdb091] text-white inline-block px-9 py-3 relative hover:bg-[#9c8a6e] mt-6" >
                  Donner des services
            </ButtonComponent>
            <ButtonComponent  onClick={toggleLoginForm}  className="bg-[#cdb091] border rounded-3xl border-[#cdb091] text-white inline-block px-9 py-3 relative hover:bg-[#9c8a6e] mt-6" >
                  Se connecter
            </ButtonComponent>
          </>
           ):
           (
            <>
            <ButtonComponent onClick={handleLogout} className="bg-[#cdb091] border rounded-3xl border-[#cdb091] text-white inline-block px-9 py-3 relative hover:bg-[#9c8a6e] mt-6" >
                     Deconnection
            </ButtonComponent>
             <h1 className='text-white'>{user.firstName}</h1>
             </>

           )
          

        
        }
          
      </div>
      <button onClick={toggleButtons} className='text-white bg-[#cdb091] lg:hidden mt-3 w-10 h-10 p-1'>
          <MenuIcon className='font-bold text-3xl ' />
      </button>

    </nav>


   
  )
}

export default NavBar
