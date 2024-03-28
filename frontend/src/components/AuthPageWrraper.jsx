import {useContext} from 'react'
import LoginForm from './Auth/LoginForm';
import SignInForm from './Auth/SignInForm';
import { FormVisibilityContext } from '../contexts/FormVisibilityContext';


function AuthPageWrraper({children}) {
    const { toggleLoginForm, toggleSignInForm, isLoginFormVisible, isSignInFormVisible } = useContext(FormVisibilityContext); // Access context values

    const closeLoginForm = () => {
        toggleLoginForm(false);
      };
    
      const closeSignInForm = () => {
        toggleSignInForm(false);
      };
  return (
    <div>
        {children}
        {isLoginFormVisible && <LoginForm onClose={closeLoginForm} />}
        {isSignInFormVisible && <SignInForm  onClose={closeSignInForm} />}
    </div>
  )
}

export default AuthPageWrraper
