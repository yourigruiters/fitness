import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import English from "../../lang/en.json";
import Dutch from "../../lang/nl.json";

type TLocale = "en" | "nl";

interface ILocaleSlice {
  locale: TLocale;
  lang: {
    [key: string]: string;
  };
}

const initialState: ILocaleSlice = {
  locale: "en",
  lang: English,
};

// SLICE
export const localeSlice = createSlice({
  name: "locale",
  initialState,
  reducers: {
    changeLocale: (state, action: PayloadAction<TLocale>) => {
      state.locale = action.payload;

      switch (action.payload) {
        case "en":
          state.lang = English;
          break;
        case "nl":
          state.lang = Dutch;
          break;
      }
    },
  },
});

// ACTIONS
export const { changeLocale } = localeSlice.actions;

// SELECTORS
export const selectLocale = (state: RootState) => state.locale.locale;
export const selectLang = (state: RootState) => state.locale.lang;

export default localeSlice.reducer;
