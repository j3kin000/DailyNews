import {newsAPI} from './newsApiClient';
import Config from 'react-native-config';

console.log('Config', Config.API_KEY);
export const getNewsByCategory = async (
  countryCode: string,
  category: string,
) => {
  //GET https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=API_KEY
  console.log('fetching getNewsByCategory');
  const {data} = await newsAPI.get(
    `top-headlines?country=${countryCode}&category=${category}&apiKey=${Config.API_KEY}&pageSize=5`,
  );
  console.log('getNewsByCategory success', data);
  return data.articles;
};

export const getNewsByRecommendation = async (countryCode: string) => {
  const {data} = await newsAPI.get(
    `top-headlines?country=${countryCode}&apiKey=${Config.API_KEY}&pageSize=10`,
  );
  console.log('getNewsByRecommendation', data.articles);
  return data.articles;
};

export const getNewsBySearch = async (search: string) => {
  //GET https://newsapi.org/v2/everything?q=apple&from=2023-07-10&to=2023-07-10&sortBy=popularity&apiKey=API_KEY
  //https://newsapi.org/v2/everything?q=bitcoin&sortBy=popularity&apiKey=a99748a818cc40a88383377b95df45fd&pageSize=10
  const {data} = await newsAPI.get(
    `everything?q=${search}&sortBy=popularity&apiKey=${Config.API_KEY}&pageSize=10`,
  );
  // console.log('getNewsBySearch', data.articles);
  return data.articles;
};
