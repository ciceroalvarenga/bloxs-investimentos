import qs from 'qs';
import { api } from '../../services/api';

type PropsNews = {
  page: number;
  category: string;
}

export function getNews({page, category}:PropsNews) {
  const params = {
    page,
    per_page: 5,
    _embed: 1,
  }
  const paramsAgribusiness = {
    page,
    per_page: 5,
    _embed: 1,
    categories: 76
  }
  
  const paramsEnergy = {
    page,
    per_page: 5,
    _embed: 1,
    categories: 74
  }


  const paramsReal = {
    page,
    per_page: 5,
    _embed: 1,
    categories: 453
  }

  switch (category) {
    case '1':
      const urlAll = `posts?${qs.stringify(params)}`
      return api
        .get(urlAll)
        .then((res)=> {
          return res.data
        })
        .catch((err) => `Ocorreu um erro${err}`)
    case '2':
      const urlAgribusiness= `posts?${qs.stringify(paramsAgribusiness)}`
      return api
        .get(urlAgribusiness)
        .then((res)=> {
          return res.data
        })
        .catch((err) => `Ocorreu um erro${err}`)
    case '3':
      const urlEnergy = `posts?${qs.stringify(paramsEnergy)}`
      return api
        .get(urlEnergy)
        .then((res)=> {
          return res.data
        })
        .catch((err) => `Ocorreu um erro${err}`)
    case '4':
      const urlReal = `posts?${qs.stringify(paramsReal)}`
      return api
        .get(urlReal)
        .then((res)=> {
          return res.data
        })
        .catch((err) => `Ocorreu um erro${err}`)
    default:
      break;
  }
}