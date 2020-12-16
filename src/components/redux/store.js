import sidebarReducer from "./SidebarReducer";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";

let store = {
    _state: {
        profileState: {
            post: [
                {id: 1, message: 'Hi how are you?', likesCount: 11},
                {id: 2, message: 'What the fuck?', likesCount: 3},
                {id: 4, message: 'What the fuck?', likesCount: 34},
                {id: 5, message: 'What the fuck?', likesCount: 2},
                {id: 6, message: 'What the fuck?', likesCount: 43},
                {id: 7, message: 'What the fuck?', likesCount: 43},
                {id: 8, message: 'What the fuck?', likesCount: 43},
            ],
            newPostText: 'NewPost'
        },

        dialogState: {
            messageData: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'Wtf'},
                {id: 3, message: 'Hello'},
                {id: 4, message: 'Wtf'},
                {id: 5, message: 'Wtf'},
                {id: 6, message: 'Hello'},
                {id: 7, message: 'Wtf'},
            ],
            dialogData: [
                {id: 1, name: 'Andrey'},
                {id: 2, name: 'Arsen'},
                {id: 3, name: 'Artyr'},
                {id: 10, name: 'Ogest'},
                {id: 11, name: 'Oktavio'},
                {id: 12, name: 'Oktavian'},
                {id: 4, name: 'Avgusto'},
                {id: 5, name: 'Avgystin'},
                {id: 13, name: 'Avreliy'},
                {id: 6, name: 'Anatoliy'},
                {id: 7, name: 'Antonio'},
                {id: 8, name: 'Avgystas'},
                {id: 9, name: 'Zohan'},

            ],
            newMessageText: 'New message'
        },
        sidebarState: {
            sidebarData: [
                {id: 1, name: 'Andrey'},
                {id: 2, name: 'Arsen'},
                {id: 3, name: 'Artyr'},
                {id: 4, name: 'Avgusto'},
                {id: 5, name: 'Avgystin'}],
        },
    },
    getState() {

        return this._state;
    },

    dispatch(action) {

        this._state.profileState = profileReducer(this._state.profileState, action);
        this._state.dialogState = dialogsReducer(this._state.dialogState, action);
        this._state.sidebarState = sidebarReducer(this._state.sidebarState, action);


        this._callSubscriber(this._state);

    },

    _callSubscriber() {

    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }






}


export default store;
window.store = store;