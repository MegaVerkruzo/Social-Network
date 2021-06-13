import React from 'react';
import './Profile.css';
import Posts from "../Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {
    return (
        <div className='content'>
            <ProfileInfo />
            <Posts />
        </div>
    );
}

export default Profile;