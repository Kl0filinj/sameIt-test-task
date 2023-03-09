import { Box, Typography } from '@mui/material';
import React from 'react';

const HistoryList = () => {
  return (
    <Box border={3} borderColor="blue" flexBasis={'30%'}>
      <Typography variant="h2" gutterBottom>
        Історія пошуку
      </Typography>
      <Box></Box>
    </Box>
  );
};

export default HistoryList;
