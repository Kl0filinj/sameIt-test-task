import { Box, Button } from '@mui/material';
import React from 'react';
import { selectIsOnOffices } from 'redux/data/data-selectors';
import { changePage } from 'redux/data/data-slice';
import { useAppDispatch, useAppSelector } from 'redux/helpers/hook';

const NavBar = () => {
  const dispatch = useAppDispatch();
  const isOnOffices = useAppSelector(selectIsOnOffices);
  return (
    <Box
      display={'flex'}
      justifyContent={'space-around'}
      alignItems={'center'}
      p={3}
    >
      <Box>
        <Button
          variant={isOnOffices ? 'outlined' : 'contained'}
          onClick={() => dispatch(changePage())}
          disabled={!isOnOffices}
          color="error"
          size="large"
          sx={{ fontWeight: 700 }}
        >
          Шукати за ТТН
        </Button>
      </Box>
      <Box>
        <Button
          variant={isOnOffices ? 'contained' : 'outlined'}
          onClick={() => dispatch(changePage())}
          disabled={isOnOffices}
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
