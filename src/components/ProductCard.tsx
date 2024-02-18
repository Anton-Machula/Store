import { FC } from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Rating,
  Chip,
} from '@mui/material';
import { Product } from '../types';

type ProductCardProps = {
  product: Product;
};

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { title, description, price, category, image, rating } = product;

  return (
    <Card
      variant="outlined"
      sx={{
        p: 1,
        boxShadow: '0 1px 3px rgba(0, 127, 255, 0.1)',
        display: 'flex',
        gap: 1,
        flexDirection: {
          xs: 'column',
          sm: 'row',
        },
        maxWidth: '700px',
      }}
    >
      <CardMedia
        component="img"
        alt={title}
        image={image}
        sx={{
          maxWidth: '300px',
          borderRadius: 0.5,
        }}
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
          variant="body2"
          color="text.secondary"
        >
          <Typography sx={{ fontWeight: 700 }}>Price:</Typography> ${price}
        </Typography>
        <Typography
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
          variant="body2"
          color="text.secondary"
        >
          <Typography sx={{ fontWeight: 700 }}>Category:</Typography>
          <Chip label={category} color="primary" />
        </Typography>
        <Typography
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
          variant="body2"
          color="text.secondary"
        >
          <Typography sx={{ fontWeight: 700 }}>Rating:</Typography>
          <Rating value={rating.rate} precision={0.5} readOnly />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {rating.count} reviews
        </Typography>
      </CardContent>
    </Card>
  );
};
