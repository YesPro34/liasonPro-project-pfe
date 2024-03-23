// import React from "react"
import NavBar from "../components/NavBar"
import lawyerImg from "../assets/lawyerImg.png"
import SearchBar from "../components/SearchBar"
import Paragraph from "../components/Paragraph"
import Footer from "../components/Footer"
import ButtonComponent from "../components/ButtonComponent"
import SearchIcon from '@mui/icons-material/Search'
import LoginForm from "../components/LoginForm"
import { useState } from "react"
import SignInForm from "../components/SignInForm"
import LoginContext from "../contexts/LoginContext"
import SignInContext from "../contexts/SignInContext"
// import AuthFormContext from "../contexts/AuthFormContext";


export default function Home() {
  const [isLoginFormVisible, setIsLoginFormVisible ] = useState(false)
  const [isSignInFormVisible, setIsSignInFormVisible] = useState(false)
  const [userRole, setUserRole] = useState("") 

  //error and success
  // const [isErrorExist, setIsErrorExist] = useState(false);
  // const [error, setError] = useState("");
  // const [isSuccessExist, setIsisSuccessExist] = useState(false);
  // const [success, setSuccess] = useState("");

  // const LoginerrorAndsuccessValues = {
  //   isErrorExist,
  //   error,
  //   isSuccessExist,
  //   success,
  //   setIsErrorExist,
  //   setError,
  //   setIsisSuccessExist,
  //   setSuccess,
  // }
  // const SignInerrorAndsuccessValues = {
  //   isErrorExist,
  //   error,
  //   isSuccessExist,
  //   success,
  //   setIsErrorExist,
  //   setError,
  //   setIsisSuccessExist,
  //   setSuccess,
  // }

  const [loginFormState, setloginFormState] = useState({
    isErrorExist: false,
    error: "",
    isSuccessExist: false,
    success: ""
  });

  const [signInFormState, setSignInFormState] = useState({
    isErrorExist: false,
    error: "",
    isSuccessExist: false,
    success: ""
  });
  


  const toggleLoginForm = () => {
      setIsLoginFormVisible(!isLoginFormVisible)
  }
  const toggleSignInForm = () => {
      setIsSignInFormVisible(!isSignInFormVisible) 
      setUserRole("lawyer")
  }

  const closeLoginForm = () => {
      setIsLoginFormVisible(false);
      setIsSignInFormVisible(false);

  }


  return (
    <div >
        <NavBar toggleLoginForm={toggleLoginForm} toggleSignInForm = {toggleSignInForm}   />
        <section className="flex mt-[80px] items-center justify-center bg-[#1e2e3e] p-8">
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
        {/* <LoginContext.Provider value={LoginerrorAndsuccessValues}>
             {isLoginFormVisible && <LoginForm onClose={closeLoginForm} /> } 
        </LoginContext.Provider>

        <SignInContext.Provider value={SignInerrorAndsuccessValues}>
             {isSignInFormVisible && userRole === "lawyer" && <SignInForm FormTitle="Donner des services" role="lawyer"  onClose={closeLoginForm} /> } 
        </SignInContext.Provider> */}
      <LoginContext.Provider value={{loginFormState, setloginFormState}}>
        {isLoginFormVisible && <LoginForm onClose={closeLoginForm} />}
      </LoginContext.Provider>
      <SignInContext.Provider value={{signInFormState, setSignInFormState}}>
        {isSignInFormVisible && userRole === "lawyer" && <SignInForm FormTitle="Donner des services" role="lawyer" onClose={closeLoginForm} />}
      </SignInContext.Provider>


        <Footer />
    </div>
      
  )
}
