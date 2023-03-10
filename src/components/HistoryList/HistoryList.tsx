import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tooltip,
  Typography,
} from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { selectHistory } from 'redux/data/data-selectors';
import { useAppDispatch, useAppSelector } from 'redux/helpers/hook';
import { cleanHistory, setPackageCode } from 'redux/data/data-slice';
import { getTrackInfo } from 'redux/data/data-operations';

const HistoryList = () => {
  const historyList = useAppSelector(selectHistory);
  const dispatch = useAppDispatch();

  const onHistoryItemClick = (packageCode: string) => {
    dispatch(setPackageCode(packageCode));
    dispatch(getTrackInfo(packageCode));
  };

  return (
    <Box border={3} borderColor="blue" flexBasis={'30%'}>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
      >
        <Typography variant="h2" fontWeight={'700'} fontSize={36} gutterBottom>
          Історія пошуку
        </Typography>
        <Tooltip title="Очистити історію перегляду ?">
          <IconButton
            color="error"
            aria-label="delete history"
            component="label"
            onClick={() => {
              dispatch(cleanHistory());
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <List
        sx={{ overflowY: 'scroll', height: '300px', border: '1px gray solid' }}
      >
        {historyList.length !== 0 ? (
          <>
            {historyList.map((item, index) => (
              <ListItem disablePadding key={index}>
                <ListItemButton
                  component="button"
                  onClick={() => onHistoryItemClick(String(item))}
                >
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
