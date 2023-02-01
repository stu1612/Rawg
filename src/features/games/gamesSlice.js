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
    platforms: builder.query({
      query: (id) => `games?key=${apiKey}&platforms=${id}`,
      // serializeQueryArgs: ({ endpointName }) => {
      //   return endpointName;
      // },
      // merge: (currentCache, newItems) => {
      //   currentCache.results.push(...newItems.results);
      // },
      // forceRefetch({ currentArg, previousArg }) {
      //   return currentArg !== previousArg;
      // },
    }),
    platform: builder.query({
      query: () => `platforms?key=${apiKey}`,
    }),
  }),
});

export const {
  usePopularGamesQuery,
  useUpComingGamesQuery,
  usePlatformsQuery,
  usePlatformQuery,
} = gamesSlice;
