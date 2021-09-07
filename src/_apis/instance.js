import axios from 'axios';

export default axios.create({
  baseURL: `http://147.182.216.49:3000/api/`
});

export const imagesURL = 'http://147.182.216.49:3000/';