import React from 'react';

import MyPostConteiner from "./MyPost/MyPostConteiner";
import Profileinfo from "./Profileinfo/Profileinfo";


const Profile = (props) => {
  
    return (
        <div>
            <Profileinfo profile={props.profile} status={props.status}  setStatus={props.setStatus} updateStatus={props.updateStatus}/>
            <MyPostConteiner store={props.store}/>


        </div>

    )
}
export default Profile;