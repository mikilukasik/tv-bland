import { SCHEDULE_ENDPOINT } from "../constants/endpoints";

export const getSchedule = async (params = {}) => {
  const queryString = Object.keys(params)
    .map(paramKey => `${paramKey}=${params[paramKey]}`)
    .join('&');
  const url = `${SCHEDULE_ENDPOINT}?${queryString}`;

  const response = await (await fetch(url)).json();

  return response;
};
