const SCHEDULE_ENDPOINT = 'https://api.tvmaze.com/schedule';
const SHOWS_ENDPOINT = 'https://api.tvmaze.com/shows';

export const getSchedule = async (params = {}) => {
  const queryString = Object.keys(params)
    .map(paramKey => `${paramKey}=${params[paramKey]}`)
    .join('&');
  const url = `${SCHEDULE_ENDPOINT}?${queryString}`;

  const response = await (await fetch(url)).json();
  return response;
};

export const getShow = async ({ showId }) => {
  const url = `${SHOWS_ENDPOINT}/${showId}?embed=cast`;

  const response = await (await fetch(url)).json();
  return response;
};
