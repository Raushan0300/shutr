import './ForgotPassword.css';
import logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const navigate = useNavigate();
  return (
    <div className='forgotMainContainer'>
      <div className='forgotLogoContainer'>
        <img src={logo} alt="logo" width={50} />
        <div className='forgotHeadText'>Shutr</div>
      </div>
      <div className='forgotSignText'>Forgot your password?</div>
      <div className='forgotOrText'>Enter your email address and we'll send you a code to reset your password.</div>
      <form className='forgotForm'>
        <input type='email' placeholder='Email address' className='forgotInput forgotInputEmail' />
        <button className='forgotButton'>Reset Password</button>
      </form>
      <div className='forgotSiginText' onClick={()=>{navigate(-1)}}>Back To Sign In</div>
    </div>
  )
};

export default ForgotPassword;