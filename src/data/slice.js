import { createSlice } from '@reduxjs/toolkit';

/* eslint-disable no-param-reassign */
export const examSlice = createSlice({
  name: 'exam',
  initialState: {
    isLoading: true,
    timeIsOver: false,
    activeAttempt: null,
    exam: {},
  },
  reducers: {
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload.isLoading;
    },
    setExamState: (state, { payload }) => {
      state.exam = payload.exam;
      state.activeAttempt = payload.activeAttempt;
    },
    expireExamAttempt: (state) => {
      state.timeIsOver = true;
    },
    getExamId: (state) => state.examId,
  },
});

export const {
  setIsLoading, setExamState, getExamId, expireExamAttempt,
} = examSlice.actions;

export default examSlice.reducer;
