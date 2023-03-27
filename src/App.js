import Home from "./pages/Home/Home";
import React, { useState } from "react";
import Login from "./pages/Login/Login";
import CartProvider from "./store/CartProvider";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function LoggedInHandler(){
    setIsLoggedIn(true)
  }
  function LoggedOutHandler(){
    setIsLoggedIn(false)
  }
  return(
      <CartProvider >
      {!isLoggedIn && <Login onLogin={LoggedInHandler} />}
      {isLoggedIn && <Home onLoggedOut={LoggedOutHandler}/>}
      </CartProvider>
  )
}

export default App;