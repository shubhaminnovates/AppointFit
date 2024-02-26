import userReducer from "./userSlice";
import viewReducer from './view'

const { configureStore } = require("@reduxjs/toolkit");

const appStore = configureStore({
  reducer: {
    user: userReducer,
    view:viewReducer,
  },
});

export default appStore;
