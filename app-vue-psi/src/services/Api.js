import axios from 'axios';

const client = axios.create({
  baseURL: 'https://www.breakingbadapi.com/api/',
});

export default client; 