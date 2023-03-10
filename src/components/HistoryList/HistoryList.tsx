import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import { selectHistory } from 'redux/data/data-selectors';
import { useAppSelector } from 'redux/helpers/hook';

const HistoryList = () => {
  const historyList = useAppSelector(selectHistory);
  return (
    <Box border={3} borderColor="blue" flexBasis={'30%'}>
      <Typography
        variant="h2"
        fontWeight={'700'}
        fontSize={36}
        textAlign="center"
        gutterBottom
      >
        Історія пошуку
      </Typography>
      <List>
        {historyList.length !== 0 ? (
          <>
            {historyList.map((item, index) => (
              <ListItem disablePadding key={index}>
                <ListItemButton component="button">
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </>
        ) : (
          <Typography variant="subtitle1" textAlign="center">
            Історії пошуку немає...
          </Typography>
        )}
      </List>
    </Box>
  );
};

export default HistoryList;
