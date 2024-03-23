import{ createContext } from 'react';

// Create the context for error and success states
const LoginContext = createContext({
  isErrorExist: false,
  error: "",
  isSuccessExist: false,
  success: "",
  setIsErrorExist: () => {},
  setError: () => {},
  setIsSuccessExist: () => {},
  setSuccess: () => {},
});

export default LoginContext;