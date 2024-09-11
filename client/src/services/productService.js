import axios from 'axios';

const API_URL = '/api/products';

export const getProducts = () => {
  return axios.get(API_URL);
};

export const addProduct = (product) => {
  return axios.post(API_URL, product);
};

export const updateProduct = (id, updatedProduct) => {
  return axios.put(`${API_URL}/${id}`, updatedProduct);
};

export const deleteProduct = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
