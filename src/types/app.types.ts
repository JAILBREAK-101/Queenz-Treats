import { FetchOptions } from "ofetch";
export interface RequestHandlerOptions extends FetchOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
}

export type TApiResponseType<T> = {
  status: "success" | "error";
  message: string;
  data: T;
};

export const apiRequestMethods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
} as const;
export type TApiRequestMethod =
  (typeof apiRequestMethods)[keyof typeof apiRequestMethods];

export interface FormErrors {
  [key: string]: string | undefined;
}
