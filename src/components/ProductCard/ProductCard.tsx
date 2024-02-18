import { FC } from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Rating,
  Chip,
} from '@mui/material';
import { Product } from '../../types';
import { styles } from './ProductCard.styles';

type ProductCardProps = {
  product: Product;
};

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { title, description, price, category, image, rating } = product;

  return (
    <Card sx={styles.card}>
      <CardMedia
        component="img"
        alt={title}
        image={image}
        sx={styles.cardMedia}
      />
      <CardContent sx={styles.cardContent}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography
          sx={styles.priceCategoryRating}
          variant="body2"
          color="text.secondary"
        >
          <Typography sx={styles.boldText}>Price:</Typography> ${price}
        </Typography>
        <Typography
          sx={styles.priceCategoryRating}
          variant="body2"
          color="text.secondary"
        >
          <Typography sx={styles.boldText}>Category:</Typography>
          <Chip label={category} color="primary" />
        </Typography>
        <Typography
          sx={styles.priceCategoryRating}
          variant="body2"
          color="text.secondary"
        >
          <Typography sx={styles.boldText}>Rating:</Typography>
          <Rating value={rating.rate} precision={0.5} readOnly />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {rating.count} reviews
        </Typography>
      </CardContent>
    </Card>
  );
};
