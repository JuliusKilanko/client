import Home from "./pages/Home/Home";
import React, { useState } from "react";
import Login from "./pages/Login/Login";
import CartProvider from "./store/CartProvider";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [notLoddedIn, setNotLoggedIn] = useState(true)

  function handleLoggedIn(e){
    e.preventDefault()
    setIsLoggedIn(true)
    setNotLoggedIn(false)
  }
  return(
      <CartProvider >
      {isLoggedIn && <Home />}
      {notLoddedIn && <Login onClick={handleLoggedIn}/>}
      </CartProvider>
  )
}

export default App;