import {useState, useContext, createContext} from "react"

export const FormVisibilityContext = createContext(null)


export function FormContext({children}){

    const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
    const [isSignInFormVisible, setIsSignInFormVisible] = useState(false);   
    const toggleLoginForm = () => setIsLoginFormVisible(prev => !prev);
    const toggleSignInForm = () => setIsSignInFormVisible(prev => !prev);

    return (
        <FormVisibilityContext.Provider value={{ 
            isLoginFormVisible,
            isSignInFormVisible,
            toggleLoginForm,
            toggleSignInForm}}>
            {children}
        </FormVisibilityContext.Provider>
    )
}


export default FormContext