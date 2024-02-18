import { Box, CircularProgress } from '@mui/material';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export const Loading = () => {
  return (
    <Box sx={styles.container}>
      <CircularProgress />
    </Box>
  );
};
