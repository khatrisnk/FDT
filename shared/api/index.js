import axios from 'axios';
import { _REQ_URL_GET_LOGIN } from '../constants/apiEndpoints';

const makeRequest = (urlExtension, data = {}) => {
  return axios.get(urlExtension, { crossdomain: true });
};
export const getLoginService = () => makeRequest(_REQ_URL_GET_LOGIN);
