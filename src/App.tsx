import { Container } from '@mui/material';
import { Products, SearchAppBar } from './components';

export const App = () => {
  return (
    <Container>
      <SearchAppBar />
      <Products />
    </Container>
  );
};
