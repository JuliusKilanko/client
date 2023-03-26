import React, { useState } from 'react'
import './login.scss'

function Login(props) {
    const [userName, setUsername] = useState('')
    const [password, setpassword] = useState('')
    const [isValid, setIsValid] = useState(false)
    function handleUserName(e){
        setUsername(e.target.value)
    }
    function handlePassword(e){
        setpassword(e.target.value)
    }
    if(userName.trim().length >= 3 && password.trim().length >= 5){
       
    }

  return (
        <form className='forms' onSubmit={props.onClick}>
            <div className='text'>
                <h3>Login to your account</h3>
            </div>
        <div className='username'>
            <label>Username</label>
            <input type="text" onChange={handleUserName}/>
        </div>
        <div>
            <label>Password</label>
            <input type="password" onChange={handlePassword}/>
        </div>
        <button className={`btn`} disabled={!isValid}>Login</button>
    </form>
  )
}

export default Login