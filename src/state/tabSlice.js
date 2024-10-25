import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const baseUrl = 'https://loripsum.net/api';

const initialState = {
  loading: false,
  text: null,
  getTextStatus: 'idle',
};

export const getText = createAsyncThunk(
  'tabSlice/getText',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('https://loripsum.net/api/1/short', {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.text(); // .text() for plain text response

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || error.toString());
    }
  }
);

const tabSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.getTextStatus = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getText.pending, (state) => {
        state.loading = true;
        state.getTextStatus = 'loading';
      })
      .addCase(getText.fulfilled, (state, action) => {
        state.loading = false;
        state.getTextStatus = 'succeeded';
        state.text = action.payload;
      })
      .addCase(getText.rejected, (state) => {
        state.loading = false;
        state.getTextStatus = 'failed';
      });
  },
});

export const { reset } = tabSlice.actions;

export default tabSlice.reducer;
