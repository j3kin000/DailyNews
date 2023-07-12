import {newsAPI} from './newsApiClient';
const API_KEY = 'a99748a818cc40a88383377b95df45fd';

export const getNewsByCategory = async (
  countryCode: string,
  category: string,
) => {
  //GET https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=API_KEY
  console.log('fetching getNewsByCategory');
  const {data} = await newsAPI.get(
    `top-headlines?country=${countryCode}&category=${category}&apiKey=${API_KEY}&pageSize=5`,
  );
  console.log('getNewsByCategory success', data);
  return data.articles;
};

export const getNewsByRecommendation = async (countryCode: string) => {
  const {data} = await newsAPI.get(
    `top-headlines?country=${countryCode}&apiKey=${API_KEY}&pageSize=10`,
  );
  // console.log('getNewsByRecommendation', data.articles);
  return data.articles;
};

export const getNewsBySearch = async (countryCode: string, search: string) => {
  //GET https://newsapi.org/v2/everything?q=apple&from=2023-07-10&to=2023-07-10&sortBy=popularity&apiKey=API_KEY

  const {data} = await newsAPI.get(
    `everything?q=${search}&language=${countryCode}&sortBy=popularity&apiKey=${API_KEY}&pageSize=10`,
  );
  // console.log('getNewsBySearch', data.articles);
  return data.articles;
};
