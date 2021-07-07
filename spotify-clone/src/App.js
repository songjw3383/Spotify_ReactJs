import React, { useEffect } from "react";
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from "./spotify";

function App() {
  
  useEffect(() => {
    const token = getTokenFromUrl();
    console.log('I Have a token>>>', token);
  },[]);

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
