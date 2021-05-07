import axios, { AxiosResponse } from 'axios';

export const post = (url: string) => {
  return (headers: unknown) => async (
    body: unknown
  ): Promise<AxiosResponse> => {
    const response = await axios.post(url, body, headers);
    return response;
  };
};
