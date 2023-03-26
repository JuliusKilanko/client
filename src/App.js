import Home from "./pages/Home/Home";
import React, { useState } from "react";
import Login from "./pages/Login/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [notLoddedIn, setNotLoggedIn] = useState(true)
  const [isValid, setIsVaid] = useState(false)

  function handleLoggedIn(e){
    e.preventDefault()
    setIsLoggedIn(true)
    setNotLoggedIn(false)
  }
  return (
    <React.Fragment>
      {isLoggedIn && <Home />}
      {notLoddedIn && <Login onClick={handleLoggedIn}/>}
    </React.Fragment>
  );
}

export default App;