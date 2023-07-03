// import the configureStore function from the @reduxjs/toolkit library
import { configureStore } from "@reduxjs/toolkit";

// import the searchReducer function from the searchSlice file
import searchReducer from "./searchSlice";

// create a store object using the configureStore function
// pass an object with a reducer property as an argument
// the reducer property is an object that maps each slice name to its reducer function
// in this case, there is only one slice named search, and its reducer function is searchReducer
export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

// export a type named RootState that represents the state of the store
// use the ReturnType utility type to infer the type of the store.getState function
export type RootState = ReturnType<typeof store.getState>;

// export a type named AppDispatch that represents the dispatch function of the store
// use the typeof operator to get the type of the store.dispatch function
export type AppDispatch = typeof store.dispatch;
