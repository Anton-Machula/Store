import useSWR from 'swr';
import { Box } from '@mui/material';
import { API_Link, fetcher } from '../utils';
import { ProductCard } from './ProductCard/ProductCard';
import { Product } from '../types';
import { Loading } from './Loading';
import { Error } from './Error';

export const Products = () => {
  const { data: products, isLoading, error } = useSWR(API_Link, fetcher);

  if (error) {
    return <Error />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
      {products.map((product: Product) => (
        <ProductCard product={product} />
      ))}
    </Box>
  );
};
