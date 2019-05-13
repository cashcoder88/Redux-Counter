export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const TIMES_TWO = 'TIMES_TWO';
export const DIVIDE_TWO = 'DIVIDE_TWO';
export const TIMES_NINETYNINE = 'TIMES_NINETYNINE';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = () => {
  // Fill in this function
  return {
    type: INCREMENT,
    payload: ''
  }
};

export const decrement = () => {
  // Fill in this function
  return {
    type: DECREMENT,
    payload: ''
  }
};

export const timesTwo = () => {
  return {
    type: TIMES_TWO,
    payload: ''
  }
};

export const divideTwo = () => {
  return {
    type: DIVIDE_TWO,
    payload: ''
  }
}

export const timesNinetyNine = () => {
  return {
    type: TIMES_NINETYNINE,
    payload: ''
  }
}
