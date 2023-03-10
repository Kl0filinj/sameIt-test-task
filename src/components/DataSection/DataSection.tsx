import { Box } from '@mui/system';
import HistoryList from 'components/HistoryList/HistoryList';
import PackageData from 'components/PackageData/PackageData';
import React from 'react';
import { useAppSelector } from 'redux/helpers/hook';
import {
  selectCurrentPackage,
  selectIsOnOffices,
  selectPackageDataLoading,
} from 'redux/data/data-selectors';
import Loader from 'components/sheared/Loader';
import OfficesList from 'components/OfficesList/OfficesList';

const DataSection: React.FC = () => {
  const currentPackageData = useAppSelector(selectCurrentPackage);
  const isLoading = useAppSelector(selectPackageDataLoading);
  const isOnOffices = useAppSelector(selectIsOnOffices);

  return (
    <Box display={'flex'} justifyContent="space-between">
      {isLoading && <Loader />}

      {!isOnOffices ? (
        <Box flexBasis="70%">
          <PackageData packageData={currentPackageData} isLoading={isLoading} />
        </Box>
      ) : (
        <Box flexBasis="70%">
          <OfficesList />
        </Box>
      )}

      <Box flexBasis="30%">
        <HistoryList />
      </Box>
    </Box>
  );
};

export default DataSection;
