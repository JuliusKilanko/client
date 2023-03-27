import React, { useState } from 'react'
import './login.scss'

function Login(props) {
    const [userName, setUsername] = useState('')
    const [userIsValid, setUserIsValid]=useState();
    const [password, setpassword] = useState('')
    const [passwordIsValid, setPasswordIsValid] = useState()
    const [formisValid, setFormIsValid] = useState(false)


    function handleUser(e){
        setUsername(e.target.value)

        setFormIsValid(
            e.target.value.trim().length <= 7 &&
        password.trim().length > 6
        );
    };

    function passwordHandler (event){
        setpassword(event.target.value)

        setFormIsValid(
            event.target.value.trim().length > 6 && 
            userName.trim().length <= 7
        );
    };

    const validateUserHandler =()=>{
        setUserIsValid(userName.trim().length <= 6)
    }

    const validatePasswordHandler =() =>{
        setPasswordIsValid(password.trim().length > 6);
    }

    function submitHandler(event){
        event.preventDefault();
        props.onLogin(userName, password)
    }


  return (
        <form className='forms' onSubmit={submitHandler}>
            <div className='text'>
                <h3>Login to your account</h3>
            </div>
        <div className='username'>
            <label>Username</label>
            <input type="text" 
            onChange={handleUser}
            value={userName}/>
        </div>
        <div>
            <label>Password</label>
            <input type="password" 
            onChange={passwordHandler}
            value={password}/>
        </div>
        <button className={`btn`} disabled={!formisValid}>Login</button>
    </form>
  )
}

export default Login