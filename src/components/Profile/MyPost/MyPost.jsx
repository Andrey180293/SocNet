import React from "react";
import x from "./MyPost.module.css";
import Post from "./Post/Post";
import { Form, Field } from "react-final-form";
import { Textarea } from "../../common/FormsControls/FormsControl";
import { required, maxValue, composeValidators } from "../../utils/validators";

const MyPost = (props) => {
  let profileState = props.profileState;
  let postElements = profileState.post.map((item) => (
    <Post
      message={item.message}
      LikesCount={item.likesCount}
      deletPost={props.deletPost}
      id={item.id}
      addLike={props.addLike}
    />
  ));

  return (
    <div className={x.postBlok}>
      <h3>My posts</h3>
      <div>
        <AddPostForm addPost={props.addPost} />

        <div className={x.posts}>{postElements}</div>
      </div>
    </div>
  );
};

const AddPostForm = (props) => {
  const OnaddPost = (values) => {
    props.addPost(values.NewPost);
  };
  return (
    <Form
      onSubmit={OnaddPost}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="NewPost"
            component={Textarea}
            placeholder="text"
            validate={composeValidators(required, maxValue(10))}
          />

          <button type="submit">Submit</button>
        </form>
      )}
    />
  );
};

export default MyPost;
