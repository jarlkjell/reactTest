import React from 'react'
import HeaderImg from '../../img/HeaderPic.png'
import ProfileImg from '../../img/ProfilePic.jpg'
import './ProfileCard.css'

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={HeaderImg} alt="" />
            <img src={ProfileImg} alt="" />
        </div>
        <div className="ProfileName">
            <span>NFT Dealer</span>
            <span>Trading NFTs since '93</span>
        </div>

        <div className="FollowStatus">
            <hr />
            <div className="Follow">
                <span>544</span>
                <span>Followings</span>
            </div>
            <div className="vl"></div>
            <div className="Follow">
                <span>11</span>
                <span>Followers</span>
            </div>
            <hr />
        </div>

        <span>
            My Profile
        </span>    
    </div>
  )
}

export default ProfileCard