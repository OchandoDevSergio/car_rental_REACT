import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../pages/userSlice";

//storage es de redux-persist para que la información no se pierda en una eventual recarga
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import thunk from "redux-thunk";
import carSlice from "../pages/carSlice";

const reducers = combineReducers({
  user: userSlice,
  car: carSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
