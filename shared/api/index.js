import axios from 'axios';
import { _REQ_URL_GET_LOGIN, _REQ_URL_GET_PROJECTS } from '../constants/apiEndpoints';

const makeRequest = (urlExtension, data) => {
  const config = {
    auth: {
      username: data.username || 'g1kJfSk73hj',
      password: data.password || 'uH83M9qK713bczD18'
    },
    params: {
      apikey: 'VE4J-DTOL-GB9N-GPB9-PWFISMQ-DEV3572'
    }
  }
  return axios.get(urlExtension, config);
};
export const getLoginService = (payload) => makeRequest(_REQ_URL_GET_LOGIN, payload);
export const getProjectsService = (payload) => makeRequest(_REQ_URL_GET_PROJECTS, payload);
export const getProjectByIdService = (payload) => makeRequest(_REQ_URL_GET_PROJECT+`\${id}`, payload);
