import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BASE_URL =`${process.env.REACT_APP_BASE_URL}`;

export const authApi = createApi({
  reducerPath: "authApi",

  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),

  endpoints: (builder) => ({
    login: builder.mutation({
      query(data) {
        return {
          url: "/auth/login",
          method: "POST",
          body: data,
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          localStorage.setItem("accessToken", data.accessToken);
        } catch (error) {
          console.log(error);
        }
      },
    }),

    register: builder.mutation({
      query(data) {
        return {
          url: "/auth/register",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
