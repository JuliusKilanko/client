import Home from "./pages/Home/Home";
import React, { useState } from "react";
import Login from "./pages/Login/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  function handleLoggedIn(e){
    e.preventDefault()
    setIsLoggedIn(true)
    alert(isLoggedIn)
  }
  return (
    <React.Fragment>
      {isLoggedIn && <Home />}
      <Login onClick={handleLoggedIn}/>
    </React.Fragment>
  );
}

export default App;