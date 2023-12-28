import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthConstants } from "../../../constants";
import { BASE_URL } from "./api.constants";
import { TBaseQuery } from "./api.types";

export const baseQuery = (url: string = ""): TBaseQuery =>
  fetchBaseQuery({
    baseUrl: `${BASE_URL}/${url}`,
    prepareHeaders: (headers) => {
      try {
        const token = localStorage.getItem(AuthConstants.Token);
        const authorization = headers.get(AuthConstants.Authorization);
        if (token && authorization === null) {
          headers.set(AuthConstants.Authorization, `Bearer Bearer ${token}`);
        }
      } catch (e) {
        // console.error(e);
      }
      return headers;
    },
  });
