import { Box, Button } from '@mui/material';
import React from 'react';

const NavBar = () => {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-around'}
      alignItems={'center'}
      p={3}
    >
      <Box>
        <Button
          variant="outlined"
          color="error"
          size="large"
          sx={{ fontWeight: 700 }}
        >
          Шукати за ТТН
        </Button>
      </Box>
      <Box>
        <Button
          variant="outlined"
          color="error"
          size="large"
          sx={{ fontWeight: 700 }}
        >
          Список відділень
        </Button>
      </Box>
    </Box>
  );
};

export default NavBar;
