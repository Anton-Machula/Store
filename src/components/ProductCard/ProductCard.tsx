import { FC } from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Rating,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
        <Typography variant="h6">{title}</Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Product description
          </AccordionSummary>
          <AccordionDetails>{description}</AccordionDetails>
        </Accordion>
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
