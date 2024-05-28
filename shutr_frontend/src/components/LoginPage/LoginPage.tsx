import './LoginPage.css';
import logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin=(e:React.FormEvent)=>{
    e.preventDefault();
    navigate('/profile')
  }
  return (
    <div className='loginMainContainer'>
      <div className='loginLogoContainer'>
        <img src={logo} alt="logo" width={50} />
        <div className='loginHeadText'>Shutr</div>
      </div>
      <div className='loginSignText'>Sign in to your account</div>
      <div className='loginOrText'>Or <span className='loginOrSpan' onClick={()=>{navigate("/signup")}}>Create Your Free Account</span></div>
      <form onSubmit={handleLogin} className='loginForm'>
        <input type='email' placeholder='Email address' className='loginInput loginInputEmail' />
        <input type='password' placeholder='Password' className='loginInput loginInputPass' />
        <div className='loginForgotPass' onClick={()=>{navigate('/reset')}}>Forgot password?</div>
        <button type='submit' className='loginButton'>Sign In</button>
      </form>
    </div>
  )
};

export default LoginPage;