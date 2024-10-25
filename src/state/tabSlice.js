import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  textData: {},
  getTextStatus: 'idle',
};

// Async thunk to fetch text data
export const getText = createAsyncThunk(
  'tabSlice/getText',
  async (tabIndex, thunkAPI) => {
    const cacheKey = `cachedTabTextData_Tab${tabIndex}`;
    const cachedData = localStorage.getItem(cacheKey);

    // Check for cached data
    if (cachedData) {
      // If cached data exists, return it
      return { tabIndex, data: cachedData };
    }

    // If no cache, fetch new data
    try {
      const response = await fetch('https://loripsum.net/api/1/short', {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.text(); // .text() for plain text response
      // Cache data in localStorage
      localStorage.setItem(cacheKey, data);
      return { tabIndex, data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || error.toString());
    }
  }
);

// Slice definition
const tabSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getText.pending, (state) => {
        state.loading = true;
        state.getTextStatus = 'loading';
      })
      .addCase(getText.fulfilled, (state, action) => {
        const { tabIndex, data } = action.payload;
        state.loading = false;
        state.getTextStatus = 'succeeded';
        state.textData[tabIndex] = data; // Store fetched text data
      })
      .addCase(getText.rejected, (state) => {
        state.loading = false;
        state.getTextStatus = 'failed';
      });
  },
});

export default tabSlice.reducer;
