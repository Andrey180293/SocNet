import { userAPI } from '../api/api';


const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRES = 'TOGGLE_IS_FOLLOWING_PROGRES';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const TOGGLE_SUBSCRIBER = 'TOGGLE_SUBSCRIBER';





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
                users: state.users.map(u => {

                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })//, ...state,subscribe:true? false:true
                    
                
            } 
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {

                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })//,  ...state,subscribe:true? false:true
            }


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


        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentpage
            }

        case SET_TOTAL_USERS:
            return {
                ...state,
                totalUsersCount: action.totaluser
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRES:
            return {
                ...state,
                toogleisFollowing: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }

            case TOGGLE_SUBSCRIBER:{
                if(state.subscribe===false)
                return {
                    ...state,
                    subscribe:true 
                   }
                else   if(state.subscribe===true)
                return {
                    ...state,
                    subscribe:false 
                   }
                   
}
        default:
            return state;
    }


}

/*export const togle = (userId) => {
    return ({
        type: TOGGLE, userId
    })
}*/
export const subscribeR = () => ({ type: TOGGLE_SUBSCRIBER })


export const followSucces = (userId) => ({ type: FOLLOW, userId })
export const unfollowSucces = (userId) => ({ type: UNFOLLOW, userId })




export const setUsers = (users) => {
    return ({
        type: SET_USERS, users
    })
}
export const setCurrentPage = (currentpage) => {
    return ({
        type: SET_CURRENT_PAGE, currentpage
    })
}

export const setTotalUserCount = (totaluser) => {
    return ({
        type: SET_TOTAL_USERS, totaluser
    })
}
export const toogleisFetching = (isFetching) => {
    return ({
        type: TOGGLE_IS_FETCHING, isFetching
    })
}
export const toogleisFollowingProgress = (isFetching, userId) => {
    return ({
        type: TOGGLE_IS_FOLLOWING_PROGRES, isFetching, userId
    })
}


export const requestUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toogleisFetching(true));
        userAPI.requestUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toogleisFetching(false));
                dispatch(setUsers(data.items));
                //    dispatch(setTotalUserCount(data.totalCount));
            });
    }
}


export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toogleisFollowingProgress(true, userId))
        userAPI.unFollowUser(userId)
            .then(data => {
                if (data.resultcode === 0) {
                    dispatch.unfollowSucces(userId)
                }
                dispatch(toogleisFollowingProgress(false, userId))
            });
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toogleisFollowingProgress(true, userId))
        userAPI.followUser(userId)
            .then(data => {
                if (data.resultcode === 0) {
                    dispatch.followSucces(userId)
                }
                dispatch(toogleisFollowingProgress(false, userId))
            });
    }
}





export default userReducer;
