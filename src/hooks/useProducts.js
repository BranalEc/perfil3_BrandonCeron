import { useMemo } from 'react';

import { PRODUCTS_URL } from '../constants/api';
import useFetchData from './useFetchData';

// Adapts Fake Store API data to the fields used by the catalog interface.
export default function useProducts() {
  const { data, loading, error, refetch } = useFetchData(PRODUCTS_URL);

  const products = useMemo(
    () =>
      (Array.isArray(data) ? data : []).map((product) => ({
        id: product.id,
        title: product.title,
        image: product.image,
        description: product.description,
        category: product.category,
        price: product.price,
        rating: product.rating,
      })),
    [data]
  );

  return { products, loading, error, refetch };
}
