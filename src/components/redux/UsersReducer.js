import { userAPI } from "../api/api";
import { updateObjectInArray } from "./../utils/object-helpers";

const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRES = "TOGGLE_IS_FOLLOWING_PROGRES";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const TOGGLE_SUBSCRIBER = "TOGGLE_SUBSCRIBER";

let initialization = {
  users: [],
  pageSize: 5,
  totalUsersCount: 100,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
  subscribe: false,
};

const userReducer = (state = initialization, action) => {
  state.users.lenght = state.pageSize;
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentpage,
      };

    case SET_TOTAL_USERS:
      return {
        ...state,
        totalUsersCount: action.totaluser,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOWING_PROGRES:
      return {
        ...state,
        toogleisFollowing: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };

    case TOGGLE_SUBSCRIBER: {
      if (state.subscribe === false)
        return {
          ...state,
          subscribe: true,
        };
      else if (state.subscribe === true)
        return {
          ...state,
          subscribe: false,
        };
    }
    default:
      return state;
  }
};

export const subscribeR = () => ({ type: TOGGLE_SUBSCRIBER });

const followSucces = (userId) => ({ type: FOLLOW, userId });
const unfollowSucces = (userId) => ({ type: UNFOLLOW, userId });

export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentpage) => ({
  type: SET_CURRENT_PAGE,
  currentpage,
});

export const setTotalUserCount = (totaluser) => ({
  type: SET_TOTAL_USERS,
  totaluser,
});
export const toogleisFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toogleisFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRES,
  isFetching,
  userId,
});

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toogleisFetching(true));
  let data = await userAPI.requestUsers(currentPage, pageSize);
  dispatch(toogleisFetching(false));
  dispatch(setUsers(data.items));
};

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toogleisFollowingProgress(true, userId));
  let data = await apiMethod(userId);
  if (data.resultcode === 0) {
    actionCreator(userId);
  }
  dispatch(toogleisFollowingProgress(false, userId));
};

export const unfollow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, userAPI.unFollowUser, unfollowSucces);
};

export const follow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, userAPI.followUser, followSucces);
};

export default userReducer;
