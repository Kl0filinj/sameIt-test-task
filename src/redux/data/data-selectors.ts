import { RootState } from "redux/store";

export const selectCurrentPackage = (state: RootState) => state.data.currentPackage;

export const selectError = (state: RootState) => state.data.error;

export const selectPackageDataLoading = (state: RootState) => state.data.isLoading;