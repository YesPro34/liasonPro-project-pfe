import  {useReducer,useContext, useState} from 'react'
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import ButtonComponent from './ButtonComponent';
import axios from "axios"
import ErrorMessage from './ErrorMessage';
import SuccessMessage from './SuccessMessage';
import LoginContext from "../contexts/LoginContext"
// import AuthFormContext from "../contexts/AuthFormContext";

function LoginCard({onClose}) {

  // const { isErrorExist, error, isSuccessExist, success, setIsErrorExist, setError, setIsisSuccessExist, setSuccess } = useContext(LoginContext);
  const { loginFormState, setloginFormState } = useContext(LoginContext);
  const initState = {
      email:"",
      password : ""

  }
      const reducer = (state,action)=>{
          switch(action.type){
            case "input": return {...state, [action.field] : action.value}
            default : return state
          }
      }
      
      const [state, dispatch] = useReducer(reducer, initState)
      
      const handleChange = (e) => {
          dispatch ({
            type:"input",
            field : e.target.name,
            value : e.target.value
          })
      } 
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!state.email || !state.password){
          setloginFormState(prevState => ({
            ...prevState,
            isErrorExist: true,
            error: "Please fill out all fields",
        }));
          return
        }
        try{
          // setIsErrorExist(false)
          const response = await axios.post("http://localhost:5000/api/v1/users/login", state , {
            headers: { 'Content-Type': 'application/json' } 
          })
          if(response.status === 200){
            setloginFormState(prevState => ({
              ...prevState,
              isSuccessExist: true,
              isErrorExist: false,
              success : "Login Successful"
            }))
            console.log("login success")
          }else{
            console.log("Unexpected response from server:", response.data)
          }
        }catch(error){
          setloginFormState(prevState => ({
            ...prevState,
            isSuccessExist:false,
            isIsErrorExist: true,
            error: "Incorrect email or password "
          }))
          console.log("error occured", error.message)
        }
    }

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="relative flex flex-col m-6 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          <div className="relative flex flex-col justify-center p-8 md:p-14">
            <ClearRoundedIcon
              className="absolute top-0 right-0 mt-4 mr-4 cursor-pointer"
              onClick={onClose}
              />
            <span className="mb-3 text-4xl font-bold">Bienvenue </span>
            <span className="font-light text-gray-400 mb-8">
              Veuillez saisir vos coordonnées .
            </span>
            <form action="" onSubmit={handleSubmit}>
            {loginFormState.isErrorExist && <ErrorMessage error={loginFormState.error} />}
            {loginFormState.isSuccessExist && <SuccessMessage success={loginFormState.success} />} 
            <div className="py-4">
              <input
                value={state.email}
                onChange={handleChange}
                placeholder='Email'
                type="text"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              />
            </div>
            <div className="py-4">
              <label htmlFor="password" className="mb-2 text-md">
                Mot de passe
              </label>
              <input
              value={state.password}
              onChange={handleChange}
              placeholder='Mot de passe'
                type="text"
                id="password"
                name="password"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              />
            </div>
            <div className="flex justify-between w-full py-4">
              <div className="mr-24">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  className="mr-2"
                />
                <label htmlFor="rememberMe" className="text-md font-bold">
                  Se souvenir de moi
                </label>
              </div>
              <span className="font-bold text-md">Mot de passe oublié ?</span>
            </div>
            
            <ButtonComponent className="w-full bg-[#cdb091] text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300" >
                Se connecter
          </ButtonComponent>
          </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default LoginCard;