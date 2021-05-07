import axios from "axios";

export const post = (url: string) => {
  return (headers: any) => async (body: any) => {
    const response = await axios.post(url, body, headers);
    return response;
  };
};
