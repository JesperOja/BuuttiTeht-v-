import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../reducers/bookReducer";
import notificationReducer from "../reducers/notificationReducer";

export default configureStore({
  reducer: {
    books: bookReducer,
    notification: notificationReducer,
  },
});
