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
    upComingGames: builder.query({
      query: (release) => `/games?${release}&key=${apiKey}`,
    }),
    platform: builder.query({
      query: (id) => `games?key=${apiKey}&platforms=${id}`,
    }),
    platforms: builder.query({
      query: () => `platforms?key=${apiKey}`,
    }),
    genres: builder.query({
      query: () => `genres?key=${apiKey}`,
    }),
    genre: builder.query({
      query: (id) => `games?key=${apiKey}&genres=${id}`,
    }),
  }),
});

export const {
  usePopularGamesQuery,
  useUpComingGamesQuery,
  usePlatformsQuery,
  usePlatformQuery,
  useGenresQuery,
  useGenreQuery,
  usePlatformAPIQuery,
} = gamesSlice;
