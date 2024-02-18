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
    <Card sx={{ border: '1px solid black', p: 1, maxWidth: '500px' }}>
      <CardMedia
        component="img"
        alt={title}
        image={image}
        sx={{ maxWidth: '100px' }}
      />
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Category: <Chip label={category} color="primary" />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: <Rating value={rating.rate} readOnly /> {rating.count}
          reviews
        </Typography>
      </CardContent>
    </Card>
  );
};
