import React from 'react';
import { Box, Container } from '@mui/material';

interface ShearedContainerProps {
  children: React.ReactNode;
}

const ShearedContainer: React.FC<ShearedContainerProps> = ({ children }) => {
  return (
    <Container
      sx={{
        maxWidth: { xs: '600px', sm: '900px', md: '1200px' },
      }}
    >
      <Box>{children}</Box>
    </Container>
  );
};

export default ShearedContainer;
