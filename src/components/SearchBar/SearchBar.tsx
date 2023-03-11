import SearchIcon from '@mui/icons-material/Search';
import { Alert } from 'components/sheared';
import { IconButton, Snackbar, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/helpers/hook';
import { getTrackInfo } from 'redux/data/data-operations';
import { changePage, setPackageCode } from 'redux/data/data-slice';
import {
  selectIsOnOffices,
  selectPackageCode,
  selectPackageDataLoading,
} from 'redux/data/data-selectors';

const SearchBar: React.FC = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectPackageDataLoading);
  const packageNumber = useAppSelector(selectPackageCode);
  const isOnOffices = useAppSelector(selectIsOnOffices);

  const handleAlertClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsAlertOpen(false);
  };

  const searchSubmitHandler = () => {
    if (packageNumber.length !== 14 || packageNumber.match(/[^0-9]/)) {
      setIsAlertOpen(true);
      return;
    }
    if (isOnOffices) {
      dispatch(changePage());
    }
    dispatch(getTrackInfo(packageNumber));
  };
  return (
    <Box
      m={'auto'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{
        px: { xs: 0 },
        py: { xs: 2, md: 4 },
        maxWidth: { xs: '100%', sm: '80%', md: '60%', lg: '50%' },
      }}
    >
      <Snackbar
        open={isAlertOpen}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={5000}
        onClose={handleAlertClose}
      >
        <Alert
          onClose={handleAlertClose}
          severity="error"
          sx={{ width: '100%' }}
        >
          Код посилки введено невірно, спробуйте знову
        </Alert>
      </Snackbar>

      <TextField
        id="outlined-search"
        label="ТТН"
        type="search"
        autoComplete="on"
        placeholder="Введіть ТТН номер посилки..."
        value={packageNumber}
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(setPackageCode(evt.target.value))
        }
        required
        fullWidth
        focused
      />
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="label"
        disabled={packageNumber === '' || isLoading === true}
        onClick={() => searchSubmitHandler()}
      >
        <SearchIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
