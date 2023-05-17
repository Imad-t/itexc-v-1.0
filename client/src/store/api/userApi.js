import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BASE_URL = "http://localhost:3000";

const baseQueryWithAccessToken = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }
    return headers;
  },
});

export const userApi = createApi({
  reducerPath: "userApi",

  baseQuery: baseQueryWithAccessToken,
  tagTypes: ["Users"],

  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query() {
        return {
          url: `/users`,
        };
      },
      providesTags: ["Users"],
    }),

    getUserDetails: builder.query({
      query(id) {
        return {
          url: `/users/${id}`,
        };
      },
      providesTags: ["Users"],
    }),
  }),
});

export const { useGetAllUsersQuery, useGetUserDetailsQuery } = userApi;
