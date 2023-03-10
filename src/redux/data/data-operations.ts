import * as api from 'api/packages';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IOfficesInfo, ITrackPackageInfo } from 'redux/helpers/dataTypes';
import {
  axiosError,
  ErrorStatusAndMessage,
} from 'redux/helpers/rejectErrorTypes';

export const getTrackInfo = createAsyncThunk<
  ITrackPackageInfo,
  string,
  { rejectValue: ErrorStatusAndMessage }
>('packageData/track', async (packageCode, thunkAPI) => {
  try {
    const response = await api.getTrackPackageInfo(packageCode);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(axiosError(error));
  }
});

export const getOfficesList = createAsyncThunk<
  IOfficesInfo[],
  void,
  { rejectValue: ErrorStatusAndMessage }
>('packageData/offices', async (_, thunkAPI) => {
  try {
    const response = await api.getOfficesInfoList();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(axiosError(error));
  }
});
