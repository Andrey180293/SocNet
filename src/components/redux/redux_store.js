import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./SidebarReducer";
import userReducer from "./UsersReducer";
import authsReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./appReducer";
import logger from "redux-logger";

let reducers = combineReducers({
  profileState: profileReducer,
  dialogState: dialogsReducer,
  sidebarState: sidebarReducer,
  userState: userReducer,
  auth: authsReducer,
  app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware, logger));

window.store = store;
export default store;
