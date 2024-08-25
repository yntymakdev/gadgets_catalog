import { API_ACCESSORIES, API_PHONES, API_TABLETS } from '../constans/api';
import { ProductDetail } from '../types/ProductDetail';
import { axiosData } from '../utils/axiosData';

export const getGadget = (url: string) => {
  return axiosData(url);
};

export const getPhones = (): Promise<ProductDetail[]> => {
  return getGadget(API_PHONES);
};

export const getTablets = (): Promise<ProductDetail[]> => {
  return getGadget(API_TABLETS);
};

export const getAccessories = (): Promise<ProductDetail[]> => {
  return getGadget(API_ACCESSORIES);
};
