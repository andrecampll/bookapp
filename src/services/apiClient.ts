import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
});
