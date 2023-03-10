import { Box } from '@mui/system';
import HistoryList from 'components/HistoryList/HistoryList';
import PackageData from 'components/PackageData/PackageData';
import React from 'react';
import { useAppSelector } from 'redux/helpers/hook';
import {
  selectCurrentPackage,
  selectPackageDataLoading,
} from 'redux/data/data-selectors';
import Loader from 'components/Loader/Loader';

const DataSection: React.FC = () => {
  const currentPackageData = useAppSelector(selectCurrentPackage);
  const isLoading = useAppSelector(selectPackageDataLoading);
  console.log(isLoading);
  return (
    <Box display={'flex'} justifyContent="space-between">
      {/* {Object.keys(currentPackageData).length > 0 && (
        <> */}
      {!isLoading ? (
        <PackageData packageData={currentPackageData} />
      ) : (
        <Loader />
      )}
      {/* </>
      )} */}
      <HistoryList />
    </Box>
  );
};

export default DataSection;
