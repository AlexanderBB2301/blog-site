//container for js app

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/sliceCounter";
import blogPostsReducer from "./features/blogposts/blogPostSlice";
import usersReducer from "./features/users/usersSlice";
export const store = configureStore({
  reducer: {
    //reducer for the counter to increment and decrement
    counter: counterReducer,
    blogPosts: blogPostsReducer,
    users: usersReducer,
  },
});
