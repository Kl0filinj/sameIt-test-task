import React from 'react';
import { Box } from '@mui/system';
import { useAppSelector } from 'redux/helpers/hook';
import {
  selectCurrentPackage,
  selectIsOnOffices,
  selectPackageDataLoading,
} from 'redux/data/data-selectors';
import { HistoryList } from 'components/HistoryList';
import { PackageData } from 'components/PackageData';
import { OfficesList } from 'components/OfficesList';

const DataSection: React.FC = () => {
  const currentPackageData = useAppSelector(selectCurrentPackage);
  const isLoading = useAppSelector(selectPackageDataLoading);
  const isOnOffices = useAppSelector(selectIsOnOffices);

  return (
    <Box
      sx={{
        display: { xs: 'block', md: 'flex' },
        justifyContent: { md: 'space-between' },
      }}
    >
      {!isOnOffices ? (
        <Box sx={{ flexBasis: { md: '70%' } }}>
          <PackageData packageData={currentPackageData} isLoading={isLoading} />
        </Box>
      ) : (
        <Box sx={{ flexBasis: { md: '70%' } }}>
          <OfficesList isLoading={isLoading} />
        </Box>
      )}

      <Box sx={{ flexBasis: { md: '30%' }, mt: { xs: 2, md: 0 } }}>
        <HistoryList />
      </Box>
    </Box>
  );
};

export default DataSection;
