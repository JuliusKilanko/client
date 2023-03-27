import React, { useContext, useRef, useState } from 'react'
import './login.scss'
import cartContext from '../../store/cart-contenxts';
import Input from '../../components/UI/Input/Input';

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

    const ctx = useContext(cartContext)
    const userInputRef = useRef();

    function submitHandler(event){
        event.preventDefault()
        ctx.userName = userInputRef.current.value;
        setUsername('')
        setpassword('')
        setFormIsValid(false)
    }


  return <form className='forms' onSubmit={submitHandler}>
            <div className='text'>
                <h3>Login to your account</h3>
            </div>
        <div className='username'>
            <Input 
            ref={userInputRef}
            onChange ={handleUser}
            value ={userName}
            input={{
                id : 'username',
                type : 'text',
                maxlength : '7',
                
            }}
            />
        </div>
        <div>
            <Input 
            onChange ={passwordHandler}
            value ={password}
            input={{
                id:'password',
                type : 'password',
                maxlength : '9',
            }}
            />
        </div>
        <button className='btn' onClick={props.onLogin} disabled={!formisValid}>Login</button>
        <div className='createAccount'>
            <p>Don't have an Account Yet?</p>
            <span>Sign Up</span>
        </div>
    </form>
}

export default Login