import { API_BASE_URL } from "@/routes/api.routes";
import { ofetch } from "ofetch";

const baseHttp = ofetch.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*", // This is for CORS
  },
  onResponseError: ({ request, response, options }) => {
    console.log("[fetch response error]");
    console.log(
      "[fetch response error]",
      request,
      response.status,
      response.body
    );
  },
});

export default baseHttp;
