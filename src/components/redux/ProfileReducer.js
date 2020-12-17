import { userAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const ADD_LIKE = "ADD_LIKE";

let initialization = {
  post: [
    { id: 1, message: "Hi how are you?", likesCount: 11 },
    { id: 2, message: "What the fuck?", likesCount: 3 },
    { id: 4, message: "What the fuck?", likesCount: 34 },
    { id: 5, message: "What the fuck?", likesCount: 2 },
    { id: 6, message: "What the fuck?", likesCount: 43 },
    { id: 7, message: "What the fuck?", likesCount: 43 },
    { id: 8, message: "What the fuck?", likesCount: 43 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialization, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        post: [
          ...state.post,
          {
            id: state.post.length + 1,
            message: action.post,
            likesCount: 0,
          },
        ],
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case DELETE_POST:
      return {
        ...state,
        post: state.post.filter((post) => post.id !== action.id),
      };
    case ADD_LIKE:
      return {
        ...state,
        post: state.post.map((item) => {
          if (item.id === action.id) {
            return { ...item, likesCount: item.likesCount + 1 };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

export const addPost = (post) => ({ type: ADD_POST, post });

export const deletPost = (id) => ({ type: DELETE_POST, id });

export const setStatus = (status) => ({ type: SET_STATUS, status });
export const addLike = (id) => ({ type: ADD_LIKE, id });

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
//Thunk
export const getProfile = (userId) => async (dispatch) => {
  let data = await userAPI.getProfile(userId);
  dispatch(setUserProfile(data));
};

export const getStatus = (userId) => async (dispatch) => {
  let data = await profileAPI.getStatus(userId);
  dispatch(setStatus(data));
};

export const updateStatus = (status) => async (dispatch) => {
  let data = await profileAPI.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;
