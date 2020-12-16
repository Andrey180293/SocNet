import React, { useEffect } from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  requestUsers,
  setCurrentPage,
  follow,
  unfollow,
  subscribeR,
} from "../redux/UsersReducer";
import Preloader from "../common/Preloader/Preloader";
import {
  getUsers,
  gePageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from "../redux/user_Selectors";
import { compose } from "redux";

const UsersConteiner = (props) => {
  useEffect(() => {
    props.requestUsers(props.currentPage, props.pageSize);
  }, []);

  const onPageChanged = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    props.requestUsers(pageNumber, props.pageSize);
  };

  useEffect(() => {
    props.requestUsers(props.currentPage, props.pageSize);
  }, [props.subscribe]);

  return (
    <>
      {props.isFetching ? <Preloader /> : null}
      <Users
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        onPageChanged={onPageChanged}
        follow={props.follow}
        unfollow={props.unfollow}
        currentPage={props.currentPage}
        users={props.users}
        followingInProgress={props.followingInProgress}
        subscribeR={props.subscribeR}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: gePageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),

    subscribe: state.userState.subscribe,
  };
};
export default compose(
  connect(mapStateToProps, {
    requestUsers,
    follow,
    unfollow,
    setCurrentPage,
    subscribeR,
  })
)(UsersConteiner);
