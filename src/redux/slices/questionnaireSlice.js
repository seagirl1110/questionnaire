import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [
    {
      id: 1,
      question: 'Question 1?',
      answerColl: [
        { id: 1, value: 'Option 1' },
        { id: 2, value: 'Option 2' },
      ],
      currentAnswer: null,
      correctAnswer: 1,
    },
    {
      id: 2,
      question: 'Question 2?',
      answerColl: [
        { id: 1, value: 'Option 1' },
        { id: 2, value: 'Option 2' },
      ],
      currentAnswer: null,
      correctAnswer: 1,
    },
    {
      id: 3,
      question: 'Question 3?',
      answerColl: [
        { id: 1, value: 'Option 1' },
        { id: 2, value: 'Option 2' },
      ],
      currentAnswer: null,
      correctAnswer: 1,
    },
    {
      id: 4,
      question: 'Question 4?',
      answerColl: [
        { id: 1, value: 'Option 1' },
        { id: 2, value: 'Option 2' },
      ],
      currentAnswer: null,
      correctAnswer: 1,
    },
    {
      id: 5,
      question: 'Question 5?',
      answerColl: [
        { id: 1, value: 'Option 1' },
        { id: 2, value: 'Option 2' },
      ],
      currentAnswer: null,
      correctAnswer: 1,
    },
  ],
  result: 0,
};

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState: initialState,
  reducers: {
    chooseAnswer: (state, { payload }) => {
      const question = state.data.find(
        (item) => item.id === +payload.questionId
      );
      question.currentAnswer = +payload.answerId;
    },
    submitAnswer: (state) => {
      const result = state.data.reduce((acc, item) => {
        if (item.currentAnswer === item.correctAnswer) {
          acc += 1;
        }
        return acc;
      }, 0);
      state.result = result;
    },
  },
});

export const { chooseAnswer, submitAnswer } = questionnaireSlice.actions;

export default questionnaireSlice.reducer;
