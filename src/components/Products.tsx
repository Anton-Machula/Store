import useSWR from 'swr';
import { API_Link, fetcher } from '../utils';
import { ProductCard } from './ProductCard';
import { Product } from '../types';
import { Box, CircularProgress } from '@mui/material';

export const Products = () => {
  const { data: products, isLoading, error } = useSWR(API_Link, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <CircularProgress />;

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
      {products.map((product: Product) => (
        <ProductCard product={product} />
      ))}
    </Box>
  );
};
