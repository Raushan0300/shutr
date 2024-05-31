import './SignupPage.css';
import logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignupPage = () => {
  const navigate = useNavigate();

  const [fName, setFName] = useState<string>('');
  const [lName, setLName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <div className='signupMainContainer'>
      <div className='signupLogoContainer'>
        <img src={logo} alt="logo" width={50} />
        <div className='signupHeadText'>Shutr</div>
      </div>
      <div className='signupSignText'>Sign up for an account</div>
      <div className='signupOrText'>Already have an account? <span className='signupOrSpan' onClick={()=>{navigate('/login')}}>Sign in</span></div>
      <form className='signupForm'>
        <input type="text" placeholder='First Name' value={fName} className='signupInput signupInputFName' />
        <input type="text" placeholder='Last Name' value={lName} className='signupInput signupInputLName' />
        <input type='email' placeholder='Email address' value={email} className='signupInput signupInputEmail' />
        <input type='password' placeholder='Password' value={password} className='signupInput signupInputPass' />
        <button className='signupButton'>Sign In</button>
      </form>
    </div>
  )
};

export default SignupPage;