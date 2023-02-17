import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Login from './Component/Login';
import Profile from './Component/Profile';
import { LoginContext } from './Context/LoginContext';

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [userName, setUseName] = useState("");
  return (
    <div className="App">
      <LoginContext.Provider value={{userName, setUseName, setShowProfile}}>
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
