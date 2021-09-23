import axios from 'axios';

const api = axios.create({
  // baseURL: process.env.REACT_APP_API,
  baseURL: 'https://conteudos.bloxs.com.br/wp-json/wp/v2/',
});

export { api }