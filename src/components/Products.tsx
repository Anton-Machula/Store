import useSWR from 'swr';
import { Grid } from '@mui/material';
import { API_Link, fetcher } from '../utils';
import { ProductCard } from './ProductCard/ProductCard';
import { Product } from '../types';
import { Loading } from './Loading';
import { Error } from './Error';
import { useGridItemLayout } from './hooks';

export const Products = () => {
  const { data: products, isLoading, error } = useSWR(API_Link, fetcher);
  const size = useGridItemLayout();

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
          <Grid item xs={size}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
