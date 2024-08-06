import './SignupPage.css';
import logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { postData } from '../Config';

const SignupPage = () => {
  const navigate = useNavigate();

  const [fName, setFName] = useState<string>('');
  const [lName, setLName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [message, setMessage] = useState<string>('');

  const handleSignup = async(e:React.FormEvent)=>{
    e.preventDefault();
    const name = fName + ' ' + lName;
    const response = await postData('signup', {name, email, password}, {});
    console.log(response);
    if(!response.err){
      navigate('/login');
    } else {
      setMessage(response.message);
    }
  };
  
  return (
    <div className='signupMainContainer'>
      <div className='signupLogoContainer'>
        <img src={logo} alt="logo" width={50} />
        <div className='signupHeadText'>Shutr</div>
      </div>
      <div className='signupSignText'>Sign up for an account</div>
      <div className='signupOrText'>Already have an account? <span className='signupOrSpan' onClick={()=>{navigate('/login')}}>Sign in</span></div>
      <form className='signupForm' onSubmit={handleSignup}>
        <input type="text" placeholder='First Name' value={fName} onChange={(e)=>{setFName(e.target.value)}} className='signupInput signupInputFName' />
        <input type="text" placeholder='Last Name' value={lName} onChange={(e)=>{setLName(e.target.value)}} className='signupInput signupInputLName' />
        <input type='email' placeholder='Email address' value={email} onChange={(e)=>{setEmail(e.target.value)}} className='signupInput signupInputEmail' />
        <input type='password' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} className='signupInput signupInputPass' />
        <button type='submit' className='signupButton'>Sign Up</button>
      </form>
      {message && <div className='signupMessage'>{message}</div>}
    </div>
  )
};

export default SignupPage;