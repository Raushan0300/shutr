import Header from "../Header/Header";
import "./ProfilePage.css";
import people from "../../assets/people.svg";
import sunset from "../../assets/338765.jpg";

const ProfilePage = () => {
  return (
    <div>
      <Header isLogin={true} />
      <div className="profilBody">
        <div className="profileBody1">
          <div className="profileContent1">
            <div>Total Followers</div>
            <img src={people} alt="people" width={30} />
          </div>

          <div>
            <div className="profileContent2">12,345</div>
            <div className="profileData">+5% from last month</div>
          </div>
        </div>

        <div className="profileBody2">
          <div className="profileContent3">
            <div>Total Posts</div>
            <img src={people} alt="people" width={30} />
          </div>

          <div>
            <div className="profileContent4">1,234</div>
            <div className="profileData">+10% from last month</div>
          </div>
        </div>

        <div className="profileBody3">
          <div className="profileContent5">
            <div>Engagement Rate</div>
            <img src={people} alt="people" width={30} />
          </div>

          <div>
            <div className="profileContent6">15.2%</div>
            <div className="profileData">+2% from last month</div>
          </div>
        </div>
      
      {/* <div className="profilePost"> */}
        <div className="profilePostCard1">
          <div className="postContent1">
            <div>New Followers</div>
            <img src={people} alt="people" width={30} />
          </div>
          <div>
            <div className="postData1">+234</div>
            <div className="postInfo1">+20% from last month</div>
          </div>
        </div>

        <div className="profilePostCard2">
          <div className="postContent2">
            <div>Top Posts</div>
            <img src={people} alt="people" width={30} />
          </div>
          <div className="postPicture">
            <div className="card">
              <img src={sunset} alt="sunset" width={150} />
              <div className="card-content">
                <h3>Sunset Vibes</h3>
                <p>123 likes</p>
              </div>
            </div>
            <div className="card">
            <img src={sunset} alt="sunset" width={150} />
              <div className="card-content">
                <h3>Cozy Moments</h3>
                <p>89 likes</p>
              </div>
            </div>
            <div className="card">
            <img src={sunset} alt="sunset" width={150} />
              <div className="card-content">
                <h3>Nature Escape</h3>
                <p>67 likes</p>
              </div>
            </div>
            <div className="card">
            <img src={sunset} alt="sunset" width={150} />
              <div className="card-content">
                <h3>City Lights</h3>
                <p>54 likes</p>
              </div>
            </div>
          </div>
        </div>

        <div className="profilePostCard3">
          <div className="postContent3">
            <div>New Followers</div>
            <img src={people} alt="people" width={30} />
          </div>
          <div>
            <div className="postData3">+234</div>
            <div className="postInfo3">+20% from last month</div>
          </div>
        </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default ProfilePage;
