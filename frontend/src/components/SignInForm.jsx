import { useReducer,useContext } from 'react'
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import ButtonComponent from './ButtonComponent';
import axios from 'axios'
import SignInContext from "../contexts/SignInContext"
// import AuthFormContext from '../contexts/AuthFormContext';
import ErrorMessage from './ErrorMessage';
import SuccessMessage from './SuccessMessage';

function SignInForm({onClose,role, FormTitle}) {


  // const { isErrorExist, error, isSuccessExist, success, setIsErrorExist, setError, setIsisSuccessExist, setSuccess } = useContext(SignInContext);
  const { signInFormState, setSignInFormState } = useContext(SignInContext);
    const initState = {
      email : "",
      firstName: "",
      lastName:"",
      password:"",
      confirmPassword:"",
      gender : "",
      role:role
    }

    const reducer = (state , action) => {
      switch(action.type){
        case  "input" :
          return  {...state, [action.field] : action.value}
        default:
          return state
      }

    
    }

    const [state, dispatch] = useReducer(reducer,initState)
    // const FormTitle = userRole === 'lawyer' ? "Donner des services" : "Prendre des services"

    const handleChange = (e) => { 
        dispatch({
          type:"input",
          field: e.target.name,
          value: e.target.value
        })
    }
        // setIsErrorExist(false)
        // setIsisSuccessExist(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!state.email || !state.firstName || !state.lastName || !state.password || !state.confirmPassword || !state.gender){
          setSignInFormState(prevState => ({
            ...prevState,
            isErrorExist: true,
            error: "Please fill out all fields",
        }))
          return
        }
        if(state.password !== state.confirmPassword){
          setSignInFormState(prevState => ({
            ...prevState,
            isErrorExist: true,
            error: "Password do not match",
        }))

          return
        }
        try{
            const response = await axios.post("http://localhost:5000/api/v1/users/", state, {
              headers: { 'Content-Type': 'application/json' } 
            });
            if(response.status === 201){
              console.log(response.status)
              setSignInFormState(prevState => ({
                ...prevState,
                isSuccessExist: true,
                isErrorExist:false,
                success: "register successful",
            }))
            }else{
              console.log("Unexpected response from server:", response)
            }
            
        }catch(error){
          setSignInFormState(prevState => ({
            ...prevState,
            isErrorExist: true,
            error: "Invalid fields",
        }))
          console.log("Error submitting form", error.message)
        }
      
    }


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="relative flex flex-col m-6 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
            <div className="relative flex flex-col justify-center p-8 md:p-14">
              <ClearRoundedIcon 
                onClick={onClose}
                className="absolute top-0 right-0 mt-4 mr-4 cursor-pointer" 
              />
              <span className="mb-3 text-4xl font-bold">{FormTitle}</span>
              <span className="font-light text-gray-400 mb-8">
                Veuillez saisir vos coordonnées .
              </span>
              <form action="" onSubmit={handleSubmit}>
              {signInFormState.isErrorExist && <ErrorMessage error={signInFormState.error} />}
              {signInFormState.isSuccessExist && <SuccessMessage success={signInFormState.success} />} 
              <div className="py-4">
                <input
                  onChange={handleChange}
                  value={state.email}
                  placeholder='Email'
                  type="text"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
              <div className="py-4">

                <input
                onChange={handleChange}
                value={state.firstName}
                 placeholder='firstName'
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
              <div className="py-4">

                <input
                onChange={handleChange}
                value={state.lastName}
                placeholder='lastName'
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
              <div className="py-4">
                <input
                onChange={handleChange}
                value={state.password}
                placeholder='Mot de passe'
                  type="password"
                  id="password"
                  name="password"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
              <div className="py-4">
                <input
                  onChange={handleChange}
                  value={state.confirmPassword}
                  placeholder=' Confirmer le mot de passe'
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
              <div className="py-4">
                <select
                  onChange={handleChange}                 
                  value={state.gender}
                  id="gender"
                  name="gender"
                  className="w-full p-2 border border-gray-300 rounded-md">
                  <option value="" disabled >Genre</option>
                  <option value="homme">Homme</option>
                  <option value="femme">Femme</option>
                </select>
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
                  J'accepte la politique de confidentialité du site LiaisonPro
                  </label>
                </div>
                <span className="font-bold text-md">Mot de passe oublié ?</span>
              </div>
              <ButtonComponent  className="w-full bg-[#cdb091] text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300" >
                  Je m'inscris gratuitement
            </ButtonComponent>
            </form>
            </div>
          </div>
        </div>
        
        
      );
  
}

export default SignInForm
