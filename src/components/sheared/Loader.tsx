import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const Loader: React.FC = () => {
  return (
    <Box flexBasis="70%" textAlign={'center'}>
      <CircularProgress color={'error'} thickness={4} size={60} />
    </Box>
  );
};

export default Loader;
