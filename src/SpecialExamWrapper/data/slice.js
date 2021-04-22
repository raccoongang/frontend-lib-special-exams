import { createSlice } from '@reduxjs/toolkit';

/* eslint-disable no-param-reassign */
export const examSlice = createSlice({
  name: 'exam',
  initialState: {
    isLoading: true,
    activeAttempt: {},
    exam: {},
  },
  reducers: {
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload.isLoading;
    },
    updateExamAttempts: (state, { payload }) => {
      console.log('updateExamAttempts');
      console.log(payload);
      state.exam = payload.exam;
      state.activeAttempt = payload.activeAttempt;
    },
    getExamId: (state) => state.examId,
  },
});

export const {
  setIsLoading, updateExamAttempts, getExamId,
} = examSlice.actions;

export default examSlice.reducer;
