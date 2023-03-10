import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getOfficesList, getTrackInfo } from './data-operations';
import { WritableDraft } from 'immer/dist/internal';
import {
  IOfficesInfoResponse,
  ITrackInfoResponse,
} from 'redux/helpers/dataTypes';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

interface IPackageDataState {
  currentPackage: Partial<ITrackInfoResponse>;
  history: string[];
  officesList: IOfficesInfoResponse[];
  isOnOffices: boolean;
  packageCode: string;
  isLoading: boolean;
  error: string | null;
}

const packageDataState: IPackageDataState = {
  packageCode: '',
  currentPackage: {},
  history: [],
  officesList: [],
  isOnOffices: false,
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
      )

      .addCase(getOfficesList.pending.type, (state, _) => {
        handlePending(state);
      })
      .addCase(
        getOfficesList.fulfilled.type,
        (state, action: PayloadAction<IOfficesInfoResponse[]>) => {
          state.officesList = action.payload;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(
        getOfficesList.rejected.type,
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
    changePage: state => {
      state.isOnOffices = !state.isOnOffices;
    },
    cleanOfficesList: state => {
      state.officesList = [];
    },
  },
});

const persistConfig = {
  key: 'package-data',
  storage,
  whitelist: ['history'],
};

export const { cleanHistory, setPackageCode, changePage, cleanOfficesList } =
  packageData.actions;
export const packageDataReducer = persistReducer(
  persistConfig,
  packageData.reducer
);
