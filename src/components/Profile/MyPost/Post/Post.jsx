import React from 'react';
import x from './Post.module.css';
import Avatar from "../../Profileinfo/Avatar/Avatar";

const Post = (props) => {
    return (
        <div className={x.item}>
            <Avatar/>
            {props.message}
            <div>
                {props.LikesCount}
            <span>Like</span>
            </div>
        </div>

    )
}
export default Post;