import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    setLoading: state => {
      state.loading = true;
    },

    setData: (state, action: PayloadAction<any>) => {
      (state.loading = false),
        (state.user = action.payload),
        (state.error = null);
    },

    setError: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {setLoading, setError, setData} = accountSlice.actions;
export default accountSlice.reducer;
