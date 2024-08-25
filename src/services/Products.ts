import axios from 'axios';
import { API_PRODUCTS } from '../constans/api';
import { Categories } from '../types/Categories';
import { Product } from '../types/Product';

export const getAllProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get<Product[]>(API_PRODUCTS);
  return data;
};

export const getProducts = async (type: Categories) => {
  const products = await getAllProducts();
  const result = products.filter(product => product.category === type);
  return result;
};
