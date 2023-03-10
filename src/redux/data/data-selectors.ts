import { RootState } from 'redux/store';

export const selectCurrentPackage = (state: RootState) =>
  state.data.currentPackage;

export const selectHistory = (state: RootState) => state.data.history;

export const selectIsOnOffices = (state: RootState) => state.data.isOnOffices;

export const selectOfficesList = (state: RootState) => state.data.officesList;

export const selectPackageCode = (state: RootState) => state.data.packageCode;

export const selectError = (state: RootState) => state.data.error;

export const selectPackageDataLoading = (state: RootState) =>
  state.data.isLoading;
