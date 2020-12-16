import { userAPI,profileAPI} from '../api/api';


const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';



let initialization={
    post: [
        {id: 1, message: 'Hi how are you?', likesCount: 11},
        {id: 2, message: 'What the fuck?', likesCount: 3},
        {id: 4, message: 'What the fuck?', likesCount: 34},
        {id: 5, message: 'What the fuck?', likesCount: 2},
        {id: 6, message: 'What the fuck?', likesCount: 43},
        {id: 7, message: 'What the fuck?', likesCount: 43},
        {id: 8, message: 'What the fuck?', likesCount: 43},
    ],
    profile:null,
    status:''
};


const profileReducer = (state=initialization, action) => {
    switch (action.type) {
        case ADD_POST: {
            return{...state,
                post:[...state.post,{id:7,message:action.post, likesCount: 0}] }
          
        }
        case SET_USER_PROFILE: {
            return{...state, profile:action.profile }
        }
        case SET_STATUS: {
            return{...state, status:action.status }
        }
        
        default:
            return state;
    }


}


export const addPost = (post) => {
    return {
        type: 'ADD_POST',post
    }
}



export const setStatus = (status) => ({type: SET_STATUS, status})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})



export const getProfile=(userId)  => {
    return (dispatch)=>{
            userAPI.getProfile(userId)
                .then(data => {
                    dispatch(setUserProfile(data));
                });
    }
}

export const getStatus=(userId)  => (dispatch)=>{
        profileAPI.getStatus(userId)
                .then(data => {
                    dispatch(setStatus(data));
                });
    }

export const updateStatus=(status)  => {
    return (dispatch)=>{
        profileAPI.updateStatus(status)
                .then(data => {
                    if( data.resultCode===0){
                        dispatch(setStatus(status));}
                });
    }
}




export default profileReducer;
