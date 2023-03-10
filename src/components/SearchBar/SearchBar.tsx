import SearchIcon from '@mui/icons-material/Search';
import { IconButton, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useAppDispatch } from 'redux/helpers/hook';
import { getTrackInfo } from 'redux/data/data-operations';

const SearchBar = () => {
  const [packageNumber, setPackageNumber] = useState('');
  const dispatch = useAppDispatch();

  const searchSubmitHandler = () => {
    if (packageNumber.length < 14) {
      console.log('Wrong code !');
      return;
    }
    dispatch(getTrackInfo(packageNumber));
  };
  return (
    <Box
      m={'auto'}
      maxWidth="50%"
      p={3}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <TextField
        id="outlined-search"
        label="ТТН"
        type="search"
        autoComplete="on"
        placeholder="Введіть ТТН номер посилки..."
        value={packageNumber}
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
          setPackageNumber(evt.target.value)
        }
        required
        fullWidth
        focused
      />
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="label"
        disabled={packageNumber === ''}
        onClick={() => searchSubmitHandler()}
      >
        <SearchIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
