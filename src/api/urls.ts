import {newsAPI} from './newsApiClient';
const API_KEY = 'a99748a818cc40a88383377b95df45fd';

export const getHeadlinesNews = async (countryCode: string) => {
  const {data} = await newsAPI.get(
    `top-headlines?country=${countryCode}&apiKey=${API_KEY}&pageSize=5`,
  );
  console.log('getHeadlinesNews', data.articles.length);
  return data;
};
