import { Alert, AlertTitle } from '@mui/material';

export const Error = () => {
  return (
    <Alert severity="error" sx={{ mt: 3 }}>
      <AlertTitle>Error</AlertTitle>
      Failed to load products
    </Alert>
  );
};
