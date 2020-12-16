import React from 'react';
import x from './Sidebar.module.css';
import Avatar from "../../Profile/Profileinfo/Avatar/Avatar";



const Sidebar = (props) => {

return(

    <div className={x.side_bar}>
    <Avatar/>
    {props.name}
    {props.id}
    </div>

    )
}
export default Sidebar;