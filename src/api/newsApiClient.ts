import axios, {
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosError,
} from 'axios';

const SHOW_LOGS: boolean = false;
const baseURL: string = 'https://newsapi.org/v2/';
const newsAPI = axios.create({
  baseURL: baseURL,
});

const requestInterceptor = async (request: InternalAxiosRequestConfig) => {
  if (SHOW_LOGS) {
    console.log('requestId', request.headers.requestId);
    console.log('request.url', request.baseURL); //?.concat(request?.url)
    console.log('request.method', request.method);
    console.log('request.data', JSON.stringify(request.data));
    console.log('request.headers', JSON.stringify(request.headers));
  }

  return request;
};

const responseInterceptor = async (
  response: AxiosResponse,
): Promise<AxiosResponse> => {
  if (SHOW_LOGS) {
    console.log('Response requestId', response.config.headers.requestId);
    console.log('response.headers', JSON.stringify(response.headers));
    console.log(
      'response.request.headers',
      JSON.stringify(response.config.headers),
    );
    console.log('response.status', response.status);
    console.log('response.data', JSON.stringify(response.data));
  }

  return response;
};

const errorInterceptor = async (error: AxiosError) => {
  if (SHOW_LOGS) {
    console.log('errorInterceptor error', error);
  }

  return Promise.reject(error);
};

newsAPI.interceptors.request.use(requestInterceptor, errorInterceptor);
newsAPI.interceptors.response.use(responseInterceptor, errorInterceptor);

export {newsAPI};
