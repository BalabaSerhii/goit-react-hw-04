import axios from 'axios';

const API_KEY = 'RewX3oArgbXlt7YVzTpmiYiR-NgC8wI3FDZU76ID7JQ';
axios.defaults.baseURL = 'https://api.unsplash.com/';


export const fetchImages = async (query, page) => {
  const res = await axios.get(`search/photos/?client_id=${API_KEY}`, {
      params: {
      query,
      page,
      per_page: 5
    ,
    }
   
  });
  return res.data;
};



