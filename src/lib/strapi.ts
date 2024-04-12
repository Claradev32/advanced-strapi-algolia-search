import axios from 'axios';
import qs from 'qs';

const getStrapiURL = (path: string) => {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${path}`;
};

export const getProducts = async (filters = {}) => {
  const queryString = qs.stringify({
    filters,
    populate: '*', 
  }, {
    encodeValuesOnly: true,
    arrayFormat: 'brackets'
  });

  const response = await axios.get(`${getStrapiURL('/api/products')}?${queryString}`);
  return response.data;
};
