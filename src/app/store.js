import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { gamesSlice } from "../features/games/gamesSlice";
import { themeSlice } from "../features/themes/themesSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    gamesSlice: gamesSlice.reducer,
    theme: themeSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gamesSlice.middleware),
});

setupListeners(store.dispatch);
