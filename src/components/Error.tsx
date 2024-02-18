import { Alert, Container } from '@mui/material';

export const Error = () => {
  return (
    <Container>
      <Alert severity="error">Failed to load products</Alert>
    </Container>
  );
};
