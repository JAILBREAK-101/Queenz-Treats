import {
  apiRequestMethods,
  RequestHandlerOptions,
  TApiRequestMethod,
} from "@/types/app.types";
import baseHttp from "./base.http";

export const apiRequestHandler = async (
  url: string,
  method: TApiRequestMethod,
  body?: any
) => {
  let options: RequestHandlerOptions = {
    method,
  };
  if (method !== apiRequestMethods.GET && body) {
    options.body = JSON.stringify(body);
    options = {
      ...options,
      body: JSON.stringify(body),
    };
  }
  // TODO: Implement session and token handling
  const session = "";
  const token = "";
  let response: Promise<any>;
  if (!token) {
    response = await baseHttp(url, options);
    return response;
  }
  options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  response = await baseHttp(url, options);
  return response;
};
