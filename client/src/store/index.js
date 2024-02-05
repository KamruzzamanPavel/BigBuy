import { configureStore, combineReducers } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";
import authSlice from "./auth-slice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Combine the reducers first
const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  auth: authSlice.reducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        // ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;

// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import cartSlice from "./cart-slice";
// import authSlice from "./auth-slice";

// // Combine the reducers first
// const rootReducer = combineReducers({
//   cart: cartSlice.reducer,
//   auth: authSlice.reducer,
// });

// // Create the Redux store without persistence
// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;
