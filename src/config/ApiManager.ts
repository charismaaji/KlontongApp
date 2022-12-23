import axios from 'axios';
import {BASE_URL} from './Constant';

const ApiManager = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default ApiManager;
