import React from 'react'
import './login.scss'

function Login(props) {

  return (
        <form className='forms' onSubmit={props.onClick}>
            <div className='text'>
                <h3>Login to your account</h3>
            </div>
        <div className='username'>
            <label>Username</label>
            <input type="text" />
        </div>
        <div>
            <label>Password</label>
            <input type="password" />
        </div>
        <button >Login</button>
    </form>
  )
}

export default Login