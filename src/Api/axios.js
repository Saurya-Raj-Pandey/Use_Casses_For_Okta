import axios from "axios";
const client = axios.create({
  baseURL: "https://dev-{{Your_Tenant}}.okta.com/api/v1",
  headers: {
    Authorization: "SSWS {Token}",
  },
});

export default client;
