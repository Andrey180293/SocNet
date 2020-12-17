import { addPost, deletPost, addLike } from "../../redux/ProfileReducer";
import MyPost from "./MyPost";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    profileState: state.profileState,
    post: state.profileState.post,
    newPostText: state.profileState.newPostText,
  };
};

const MyPostConteiner = connect(mapStateToProps, {
  addPost,
  deletPost,
  addLike,
})(MyPost);

export default MyPostConteiner;
