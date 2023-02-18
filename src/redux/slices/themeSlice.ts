import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

type TTheme = "light" | "dark";

interface IThemeSlice {
  theme: TTheme;
}

const initialState: IThemeSlice = {
  theme: "light",
};

// SLICE
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<TTheme>) => {
      state.theme = action.payload;
    },
  },
});

// ACTIONS
export const { changeTheme } = themeSlice.actions;

// SELECTORS
export const selectTheme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
