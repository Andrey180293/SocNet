import React from "react";
import x from './Usersinfo.module.css'


const UsersInfo = (props) => {

    return (<div className={x.usersinfo}>
            {props.followed
            }
            {props.fullName}
            {props.status}
            {props.location.city} <br/>
            {props.location.country}
        </div>


    )
}


export default UsersInfo
