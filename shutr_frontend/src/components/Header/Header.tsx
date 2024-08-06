// Code to display the header of the application
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import user from "../../assets/user.svg";

const Header = (props: any) => {
  const { isLogin } = props;
  const navigate = useNavigate();

  return (
    <div className="homeTop">
      <div className="homeLogo">
        <img src={logo} alt="logo" width={50} />
        <div className="homeSocialHub">Shutr</div>
      </div>

      {isLogin && (
        <div className="homeMiddle">
          <button className="home">Home</button>
          <button className="explore">Explore</button>
          <button className="message">Messages</button>
          <button className="profile">Profile</button>
        </div>
      )}
      {!isLogin?<div className="homeBtn">
        <button
          className="signup"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign Up
        </button>
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="login"
        >
          Log In
        </button>
      </div>:<img src={user} alt="user" width={50} onClick={()=>{navigate('/feed')}} />}
    </div>
  );
};

export default Header;
