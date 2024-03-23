
// import Menu from '@mui/icons-material/Menu';
import { useState } from 'react';
import ButtonComponent from './ButtonComponent'
import Logo from "./Logo"
import MenuIcon from '@mui/icons-material/Menu';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';


const NavBar = ({toggleLoginForm , toggleSignInForm}) => {


  const [buttonsVisible, setButtonsVisible] = useState(false);

  const toggleButtons = () => {
    setButtonsVisible(!buttonsVisible);
  };


  return (
    <nav className='flex justify-between items-center px-5 py-3 fixed top-0 left-0 right-0 bg-[#1e2e3e] '>
      <div className='ml-4'>
          <Logo />
      </div>
      <div className={`lg:flex space-x-4 ${buttonsVisible ? 'flex' : 'hidden'}`}>
          <ButtonComponent  onClick={toggleSignInForm}   className="bg-[#cdb091] border rounded-3xl border-[#cdb091] text-white inline-block px-9 py-3 relative hover:bg-[#9c8a6e] mt-6" >
                 Donner des services
          </ButtonComponent>
          <ButtonComponent  onClick={toggleLoginForm}  className="bg-[#cdb091] border rounded-3xl border-[#cdb091] text-white inline-block px-9 py-3 relative hover:bg-[#9c8a6e] mt-6" >
                  Se connecter
          </ButtonComponent>
      </div>
      <button onClick={toggleButtons} className='text-white bg-[#cdb091] lg:hidden mt-3 w-10 h-10 p-1'>
          <MenuIcon className='font-bold text-3xl ' />
      </button>

      {/* {buttonsVisible && (
        <div className="lg:hidden absolute bottom-0 left-0 w-screen bg-[#1e2e3e]">
          <div className="justify-center py-3">
            <ButtonComponent className="bg-[#cdb091] border rounded-3xl border-[#cdb091] text-white inline-block px-9 py-3 relative hover:bg-[#9c8a6e]">
              Donner des services
            </ButtonComponent>
            <ButtonComponent className="bg-[#cdb091] border rounded-3xl border-[#cdb091] text-white inline-block px-9 py-3 relative hover:bg-[#9c8a6e]">
              Se connecter
            </ButtonComponent>
          </div>
          <div className='text-white bg-[#cdb091] lg:hidden mt-3 w-10 h-10 p-1'>
             <ClearRoundedIcon />
          </div>
        </div>
      )} */}
    </nav>
   
  )
}

export default NavBar
