import React from 'react';
import ProfileComponent from '../components/ProfileComponent'

const Profile = (props) => {

    const { obj } = props

    return (
        <ProfileComponent 
            name={ obj.name }
        />
    )
}

export default Profile