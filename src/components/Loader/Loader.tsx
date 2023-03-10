import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const Loader = () => {
  return (
    <Box width={'100%'} textAlign={'center'}>
      <CircularProgress color="secondary" thickness={4} size={60} />
    </Box>
  );
};

export default Loader;
