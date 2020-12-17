import React from "react";
import x from "./Post.module.css";
import Avatar from "../../Profileinfo/Avatar/Avatar";
import { Button } from "antd";

const Post = ({ deletPost, id, message, LikesCount, addLike }) => {
  return (
    <div className={x.item}>
      <Avatar />
      {message}
      <div>
        {LikesCount}
        <span onClick={() => addLike(id)}>Like</span>{" "}
        <Button type="link" onClick={() => deletPost(id)}>
          delet
        </Button>
      </div>
    </div>
  );
};
export default Post;
