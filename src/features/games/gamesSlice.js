import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gamesSlice = createApi({
  reducerPath: "gamesSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.rawg.io/api",
    mode: "cors",
  }),
  endpoints: (builder) => ({
    popularGames: builder.query({
      query: (popular) =>
        `/games?${popular}&key=${process.env.REACT_APP_API_KEY}`,
    }),
  }),
});

export const { usePopularGamesQuery } = gamesSlice;
