import { Alert } from '@mui/material';

export const Error = () => {
  return (
    <Alert severity="error" sx={{ mt: 3 }}>
      Failed to load products
    </Alert>
  );
};
