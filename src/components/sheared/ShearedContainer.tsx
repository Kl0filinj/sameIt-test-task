import { Box, Container } from '@mui/material';
import React from 'react';

interface ShearedContainerProps {
  children: React.ReactNode;
}

const ShearedContainer: React.FC<ShearedContainerProps> = ({ children }) => {
  return (
    <Container maxWidth="lg" sx={{ border: 3, borderColor: 'green' }}>
      <Box>{children}</Box>
    </Container>
  );
};

export default ShearedContainer;
