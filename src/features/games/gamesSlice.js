import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL, apiKey } from "../../lib/api";

export const gamesSlice = createApi({
  reducerPath: "gamesSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    mode: "cors",
  }),
  endpoints: (builder) => ({
    popularGames: builder.query({
      query: (popular) => `/games?${popular}&key=${apiKey}`,
    }),
  }),
});

export const { usePopularGamesQuery } = gamesSlice;
