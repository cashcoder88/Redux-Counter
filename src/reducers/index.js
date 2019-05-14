import { INCREMENT, DECREMENT, TIMES_TWO, DIVIDE_TWO, TIMES_NINETYNINE } from '../actions';

const initialState = {
  count: 0
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
    // Fill in the body of this case
      return {
        count: state.count += 1
      };
    case DECREMENT:
    // Fill in the body of this case
      return {
        count: state.count -= 1
      };

    case TIMES_TWO:
      return {
        count: state.count * 2
      }
    case DIVIDE_TWO:
      return {
        count: state.count / 2
      }
    case TIMES_NINETYNINE:
      return {
        count: state.count * 99
      }
      default:
        return state;
  }
};