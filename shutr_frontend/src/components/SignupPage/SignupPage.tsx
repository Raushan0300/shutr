import './SignupPage.css';
import logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  return (
    <div className='signupMainContainer'>
      <div className='signupLogoContainer'>
        <img src={logo} alt="logo" width={50} />
        <div className='signupHeadText'>Shutr</div>
      </div>
      <div className='signupSignText'>Sign up for an account</div>
      <div className='signupOrText'>Already have an account? <span className='signupOrSpan' onClick={()=>{navigate('/login')}}>Sign in</span></div>
      <form className='signupForm'>
        <input type="text" placeholder='First Name' className='signupInput signupInputFName' />
        <input type="text" placeholder='Last Name' className='signupInput signupInputLName' />
        <input type='email' placeholder='Email address' className='signupInput signupInputEmail' />
        <input type='password' placeholder='Password' className='signupInput signupInputPass' />
        <button className='signupButton'>Sign In</button>
      </form>
    </div>
  )
};

export default SignupPage;