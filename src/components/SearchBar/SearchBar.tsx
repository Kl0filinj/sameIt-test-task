import SearchIcon from '@mui/icons-material/Search';
import { IconButton, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const SearchBar = () => {
  const [packageNumber, setPackageNumber] = useState('');
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
        label="Search field"
        type="search"
        autoComplete="off"
        placeholder="Введіть ТТН номер посилки..."
        value={packageNumber}
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
          setPackageNumber(evt.target.value)
        }
        fullWidth
        focused
      />
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="label"
        disabled={packageNumber === ''}
      >
        <SearchIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
