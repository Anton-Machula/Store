export const styles = {
  card: {
    variant: 'outlined',
    p: 1,
    boxShadow: '0 1px 3px rgba(0, 127, 255, 0.1)',
    display: 'flex',
    gap: 1,
    flexDirection: {
      xs: 'column',
      sm: 'row',
    },
    maxWidth: '700px',
  },
  cardMedia: {
    component: 'img',
    maxWidth: '300px',
    borderRadius: 0.5,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  },
  priceCategoryRating: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  },
  boldText: {
    fontWeight: 700,
  },
};
