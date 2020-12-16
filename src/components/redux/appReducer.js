import { getAuthUserData } from '../redux/authReducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialization = {
    initialized: false
};

const appReducer = (state = initialization, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: 
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSucces = () => ({ type: INITIALIZED_SUCCESS })

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSucces());
        });
}
export default appReducer;

