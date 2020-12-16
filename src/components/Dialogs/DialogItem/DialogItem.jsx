import React from 'react';
import x from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Avatar from "../../Profile/Profileinfo/Avatar/Avatar";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={x.dialog + ' ' + x.active}>
            <Avatar/>
            <NavLink to={path}> {props.name}</NavLink>
        </div>

    )
}

export default DialogItem;