import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getTrackInfo } from './data-operations';
import { WritableDraft } from 'immer/dist/internal';
import { ITrackInfoResponse } from 'redux/helpers/dataTypes';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

interface IPackageDataState {
  currentPackage: Partial<ITrackInfoResponse>;
  history: String[];
  officesList: [];
  packageCode: string;
  isLoading: Boolean;
  error: String | null;
}

const packageDataState: IPackageDataState = {
  currentPackage: {},
  history: [],
  officesList: [],
  packageCode: '',
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
      .addCase(
        getTrackInfo.fulfilled.type,
        (state, action: PayloadAction<ITrackInfoResponse>) => {
          state.currentPackage = action.payload;
          if (!state.history.includes(action.payload.Number)) {
            state.history = [...state.history, action.payload.Number];
          }
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(
        getTrackInfo.rejected.type,
        (state, action: PayloadAction<string>) => {
          handleRejected(state, action);
        }
      );
  },
  reducers: {
    cleanHistory: state => {
      state.history = [];
    },
    setPackageCode: (state, { payload }) => {
      state.packageCode = payload;
    },
  },
});

const persistConfig = {
  key: 'package-data',
  storage,
  whitelist: ['history'],
};

export const { cleanHistory, setPackageCode } = packageData.actions;
export const packageDataReducer = persistReducer(
  persistConfig,
  packageData.reducer
);
