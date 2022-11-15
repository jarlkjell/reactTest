//type rafce to start

import React from 'react'
import ProfileSide from '../../components/profile/ProfileSide'
import './Home.css'

const Home = () => {
  return (
    //type div.Home to create div with className Home
    <div className="Home">
        <ProfileSide/>
        <div className="postSide">Posts</div>
        <div className="RightSide">Rightside</div>
    </div>
  )
}

export default Home