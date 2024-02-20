import useSWR from 'swr';
import { Box, Grid } from '@mui/material';
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
    <Grid container spacing={1} sx={{ p: 1 }}>
      <Grid container item spacing={3}>
        {products.map((product: Product) => (
          <Grid item xs={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
