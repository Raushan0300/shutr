import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import feed from "../../assets/feed.svg";
import network from "../../assets/network.svg";
import user from "../../assets/user.svg";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
const HomePage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      setIsLogin(true);
    }
  }, [token]);
  return (
    <div className="homeMainContainer">
      <Header isLogin={isLogin} />
      <div className="homeSection1">
        <div className="homeText">Connect with the world </div>
        <div className="homeSubText">
          Share your thoughts, connect with friends, and explore new
          communities.
        </div>
        <button
          className="homeSubBtn"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Join Now
        </button>
      </div>
      <div className="homeSection2">
        <div className="homeSectionCard">
          <img src={feed} alt="feed" width={30} />
          <div className="homeSectionCardText">Personalized Feed</div>
          <div className="homeSectionCardSubText">
            Discover new content tailored to your interests.
          </div>
        </div>
        <div className="homeSectionCard">
          <img src={network} alt="network" width={30} />
          <div className="homeSectionCardText">Powerful Connections</div>
          <div className="homeSectionCardSubText">
            Build meaningful relationships with like-minded individuals.
          </div>
        </div>
        <div className="homeSectionCard">
          <img src={user} alt="user" width={30} />
          <div className="homeSectionCardText">Vibrant Communities</div>
          <div className="homeSectionCardSubText">
            Join thriving communities and engage in meaningful discussions.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
