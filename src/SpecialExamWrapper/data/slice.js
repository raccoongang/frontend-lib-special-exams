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
      state.exam = payload.exam;
      state.activeAttempt = payload.activeAttempt;
    },
    getExamId: (state) => state.examId,
  },
});

export const {
  setIsLoading, updateExamAttempts, getExamId, setAttempt,
} = examSlice.actions;

export default examSlice.reducer;
