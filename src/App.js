import Home from "./pages/Home/Home";
import React, { useState } from "react";
import Login from "./pages/Login/Login";
import CartProvider from "./store/CartProvider";
import './App.scss'

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
      <div className={isLoggedIn ? 'hide' : 'show'}>
<Login onLogin={LoggedInHandler} />
      </div>
      {isLoggedIn && <Home onLoggedOut={LoggedOutHandler}/>}
      </CartProvider>
  )
}

export default App;