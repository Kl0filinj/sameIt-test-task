import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { selectHistory, selectIsOnOffices } from 'redux/data/data-selectors';
import { useAppDispatch, useAppSelector } from 'redux/helpers/hook';
import { getTrackInfo } from 'redux/data/data-operations';
import {
  changePage,
  cleanHistory,
  setPackageCode,
} from 'redux/data/data-slice';
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tooltip,
  Typography,
} from '@mui/material';

const HistoryList: React.FC = () => {
  const historyList = useAppSelector(selectHistory);
  const isOnOffices = useAppSelector(selectIsOnOffices);
  const dispatch = useAppDispatch();

  const onHistoryItemClick = (packageCode: string) => {
    if (isOnOffices) {
      dispatch(changePage());
    }
    dispatch(setPackageCode(packageCode));
    dispatch(getTrackInfo(packageCode));
  };

  return (
    <>
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
            {historyList.map(item => (
              <Box key={item}>
                <ListItem disablePadding>
                  <ListItemButton
                    component="button"
                    onClick={() => onHistoryItemClick(item)}
                  >
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </Box>
            ))}
          </>
        ) : (
          <Typography variant="subtitle1" textAlign="center">
            Історії пошуку немає...
          </Typography>
        )}
      </List>
    </>
  );
};

export default HistoryList;
