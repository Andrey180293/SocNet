import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  requestUsers,
  setCurrentPage,
  follow,
  unfollow,
} from "../redux/UsersReducer";
import Preloader from "../common/Preloader";
import {
  getUsers,
  gePageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from "../redux/user_Selectors";
import { compose } from "redux";

class UsersConteiner extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.requestUsers(pageNumber, this.props.pageSize);
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.props.subscribe !== prevProps.subscribe) {
      this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }
  }
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          currentPage={this.props.currentPage}
          users={this.props.users}
          followingInProgress={this.props.followingInProgress}
          subscribe={this.props.subscribe}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: gePageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),

    subscribe: state.userState.subscribes,
  };
};
export default compose(
  connect(mapStateToProps, { requestUsers, follow, unfollow, setCurrentPage })
)(UsersConteiner);
/*  case TOGGLE:
              return {
                  ...state,
  
                  users: state.users.map(u => {
  
                      if (u.id === action.userId && u.followed === true) {
                          return { ...u, followed: false }
                      } else if (u.id === action.userId && u.followed === false)
                          return { ...u, followed: true }
  
                      return u;
                  })
              }*/
