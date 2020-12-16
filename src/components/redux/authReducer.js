import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_ERROR = 'SET_ERROR';


let initialization = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    password: null,
    rememberMe: false,
    errors:null
};

const authsReducer = (state = initialization, action) => {
    switch (action.type) {
        case SET_USER_DATA: {

            return {
                ...state,
                ...action.payload
            }
        }
         case SET_ERROR: {

             return {
                 ...state,
                errors: action.message

             }
         }
        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login,isAuth) => ({ type: SET_USER_DATA, payload:{userId,email,login,isAuth} })
export const stopSubmit = (message) => ({ type: SET_ERROR, message })



export const getAuthUserData = () => {

    return (dispatch) => {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    let { id, email, login ,isAuth} = data.data;
                    dispatch(setAuthUserData(id, email, login,true));
                }
            });
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData());
                }else{dispatch(stopSubmit(data.messages[0]))}
            });
    }
}

export const logOut = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            });
    }
}
export default authsReducer;

