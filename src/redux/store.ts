import { configureStore } from "@reduxjs/toolkit";
import localeSlice from "./slices/localeSlice";
import themeSlice from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    locale: localeSlice,
    theme: themeSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
