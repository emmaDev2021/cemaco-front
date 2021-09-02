import axios from 'axios';

export default axios.create({
  baseURL: `http://localhost:3000/api/`
});

export const imagesURL = 'http://localhost:3000/';