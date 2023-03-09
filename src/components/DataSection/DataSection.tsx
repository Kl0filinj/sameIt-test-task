import { Box } from '@mui/system';
import HistoryList from 'components/HistoryList/HistoryList';
import PackageData from 'components/PackageData/PackageData';
import React from 'react';

const DataSection = () => {
  return (
    <Box display={'flex'} justifyContent="space-around">
      <PackageData />
      <HistoryList />
    </Box>
  );
};

export default DataSection;
