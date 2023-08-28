import React from 'react'
import {auth} from '../Firebase'
import {GoogleAuthProvider , signInWithPopup} from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {
  
  const navigate = useNavigate();


 const googleClick = async () =>{
  const provider = new GoogleAuthProvider();
  const result = await  signInWithPopup(auth , provider)

  // console.log(result);

  navigate('/blogs')
 }


  return (
   <>
    {/* <div className='container'>
        <div className='d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
          <img  onClick={googleClick} src='https://static.vecteezy.com/system/resources/previews/012/871/371/original/google-search-icon-google-product-illustration-free-png.png' alt='Google login'
            style={{width:'10%'}}
          />
        </div>
    </div> */}

    <div class="login-container">
     <button class="login-button" onClick={googleClick}>
    <img src="https://static.vecteezy.com/system/resources/previews/012/871/371/original/google-search-icon-google-product-illustration-free-png.png" alt="Google Logo" class="google-logo" />
    Login with Google
  </button>

            </div>
   </>
  )
}

export default Login