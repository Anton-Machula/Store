import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { Grid } from '@mui/material';
import { API_Link, fetcher } from '../utils';
import { ProductCard } from './ProductCard/ProductCard';
import { Product } from '../types';
import { Loading } from './Loading';
import { Error } from './Error';

enum GridItemSize {
  Mobile = 12,
  Tablet = 6,
  Computer = 4,
}

export const Products = () => {
  const { data: products, isLoading, error } = useSWR(API_Link, fetcher);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [gridItemSize, setGridItemSize] = useState(GridItemSize.Computer);

  console.log(gridItemSize);

  useEffect(() => {
    const handleWindowResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth > 1200) {
      setGridItemSize(GridItemSize.Computer);
      return;
    }

    if (screenWidth < 768) {
      setGridItemSize(GridItemSize.Mobile);
      return;
    }

    setGridItemSize(GridItemSize.Tablet);
  }, [screenWidth]);

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
          <Grid item xs={gridItemSize}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
