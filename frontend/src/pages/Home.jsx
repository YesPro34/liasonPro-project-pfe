import NavBar from "../components/NavBar"
import lawyerImg from "../assets/lawyerImg.png"
import SearchBar from "../components/SearchBar"
import Paragraph from "../components/Paragraph"
import Footer from "../components/Footer"
import ButtonComponent from "../components/ButtonComponent"
import SearchIcon from '@mui/icons-material/Search'
import LoginForm from "../components/LoginForm"
import { useState, useContext } from "react"
import SignInForm from "../components/SignInForm"
import {Toaster} from "react-hot-toast"
import { FormVisibilityContext } from "../contexts/FormVisibilityContext"




export default function Home() {
  // const [isLoginFormVisible, setIsLoginFormVisible ] = useState(false)
  // const [isSignInFormVisible, setIsSignInFormVisible] = useState(false)
  const [userRole, setUserRole] = useState("lawyer") 


  // const toggleLoginForm = () => {
  //     setIsLoginFormVisible(!isLoginFormVisible)
  // }
  // const toggleSignInForm = () => {
  //     setIsSignInFormVisible(!isSignInFormVisible) 
  //     setUserRole("lawyer")
  // }
  const { toggleLoginForm, toggleSignInForm, isLoginFormVisible, isSignInFormVisible } = useContext(FormVisibilityContext); // Access context values
  const closeLoginForm = () => {
    toggleLoginForm(false);
  };

  const closeSignInForm = () => {
    toggleSignInForm(false);
  };

  return (
    <div>
        <NavBar  />
        <Toaster position="top-right" toastCaptions={{duration:2000}}/>
        <section className="flex mt-[80px] h-screen items-center justify-center bg-[#1e2e3e] p-8">
          <div className="mt-[150px]  flex flex-col items-center  justify-center lg:flex-row lg:justify-between ">
            <div> 
                <h1 className="text-white
                                text-5xl font-black
                                font-helvetica-neue max-w-[100%] lg:max-w-[90%] md:text-left text-center mb-4">Prenez des services particuliers
                </h1>
                  <Paragraph className="text-white text-2xl font-bold font-helvetica-neue leading-6 mt-8 mb-4">
                        avec l'avocat qui vous correspond enfin !
                  </Paragraph>
                <div>
                  <SearchBar className="space-y-4 w-[80%] lg:w-[460px] h-[65px] px-4 border border-gray-300 rounded-lg shadow-lg focus:outline-none" placeholder="Quel type de service ?"/>
                  <SearchBar className="mt-6 w-[80%] lg:w-[460px] h-[65px] px-4 border border-gray-300 rounded-lg shadow-lg focus:outline-none" placeholder="Dans quelle ville ?"/>
                  <ButtonComponent   className="bg-[#cdb091] border rounded-2xl border-[#cdb091] text-white inline-block px-9 py-3 relative hover:bg-[#9c8a6e] mt-6">
                     <SearchIcon />
                  </ButtonComponent>             
                </div>
            </div>
            <div className="">
                <img src={lawyerImg} alt="" />
            </div>
          </div>
        </section>
        {isLoginFormVisible && <LoginForm onClose={closeLoginForm} />}
        {isSignInFormVisible && userRole === "lawyer" && <SignInForm FormTitle="Donner des services" role="lawyer" onClose={closeSignInForm} />}
    </div>
      
  )
}
