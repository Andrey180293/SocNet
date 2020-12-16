import {createSelector} from 'reselect'


const getUsersSelector=(state)=>{
    return state.userState.users;
}
export const getUsers=createSelector(getUsersSelector,
    
    (users)=>{
        return users.filter(u=>true);
    })

export const gePageSize=(state)=>{
    return state.userState.pageSize;
}
export const getTotalUsersCount=(state)=>{
    return state.userState.totalUsersCount;
}
export const getCurrentPage=(state)=>{
    return state.userState.currentPage;
}
export const getIsFetching=(state)=>{
    return state.userState.isFetching;
}
export const getFollowingInProgress=(state)=>{
    return state.userState.followingInProgress;
}