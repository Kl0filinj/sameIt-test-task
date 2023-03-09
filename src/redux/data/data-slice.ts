import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';
import { getTrackInfo } from './data-operations';
import { WritableDraft } from 'immer/dist/internal';
import { ITrackInfoResponse } from 'redux/helpers/dataTypes';

interface IPackageDataState {
    currentPackage: Object,
    history: String[],
    officesList: [],
    isLoading: Boolean,
    error: String | null,
}

const packageDataState: IPackageDataState = {
    currentPackage: {},
    history: [],
    officesList: [],
    isLoading: false,
    error: null,
  
};

const handlePending = (state: WritableDraft<IPackageDataState>) => {
  state.isLoading = true;
};

const handleRejected = (
  state: WritableDraft<IPackageDataState>,
  action: PayloadAction<string>
) => {
  state.isLoading = false;
  state.error = action.payload;
};

// const normalizeState = (state: WritableDraft<IPackageDataState>) => {
//   state.isLoading = false;
//   state.error = null;
// };

export const packageData = createSlice({
  name: 'package-data',
  initialState: packageDataState,
  extraReducers: builder => {
    builder
      .addCase(getTrackInfo.pending.type, (state, _) => {
        handlePending(state);
      })
      .addCase(getTrackInfo.fulfilled.type, (state, action: PayloadAction<ITrackInfoResponse>) => {
        state.currentPackage = action.payload
        state.history = [...state.history, action.payload.Number]
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getTrackInfo.rejected.type, (state, action: PayloadAction<string>) => {
        handleRejected(state, action)
      })
  },
  reducers: {},
});

// export const { addTask, deleteTask } = contactsSlice.actions;
export const packageDataReducer = packageData.reducer;