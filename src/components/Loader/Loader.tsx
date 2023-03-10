import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const Loader = () => {
  return (
    <Box flexBasis={'70%'} textAlign={'center'}>
      <CircularProgress color={'error'} thickness={4} size={60} />
    </Box>
  );
};

export default Loader;
