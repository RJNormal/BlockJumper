const INCREMENT_SCORE = 'score/increment';
const RESET_SCORE = 'score/reset';

export const incrementScore = () => ({ type: INCREMENT_SCORE });
export const resetScore = () => ({ type: RESET_SCORE });

const initialState = { value: 0 };

const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_SCORE:
      return { ...state, value: state.value + 1 };
    case RESET_SCORE:
      return { ...state, value: 0 };
    default:
      return state;
  }
};

export default scoreReducer;