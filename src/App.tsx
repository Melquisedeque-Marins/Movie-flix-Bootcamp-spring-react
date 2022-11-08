import { useState } from 'react';
import { AuthContext, AuthContextData } from './AuthContext';
import Routes from "./Routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

function App() {

  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false
  });

  return (
    <div className="App">
      <AuthContext.Provider value={{ authContextData, setAuthContextData}}>
        <Routes/>
        <ToastContainer/>
      </AuthContext.Provider>
    </div>
  )
}

export default App
