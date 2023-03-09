import { Box, Typography } from '@mui/material';
import React from 'react';

const PackageData = () => {
  return (
    <Box border={3} borderColor="blue" flexBasis={'60%'}>
      <Typography variant="h2" gutterBottom>
        Інформація за посилкою
      </Typography>
      <Box></Box>
    </Box>
  );
};

export default PackageData;
