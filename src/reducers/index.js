import { USER_GUESS } from '../actions';

const initialState = {
  currentGuess: '',
  currentSolution: Math.floor(Math.random(1, 100) * 100),
  previousGuesses: [],
  currentFeedback: 'Make your Guess!',
  feedbackOptions: ['Make your Guess!', 'cold', 'less than warm', 'Kinda hot', 'hot', 'You Won. Click new game to play again' ]
}

export const reducers = (state = initialState, action) => {
    if (action.type === USER_GUESS) {

      let currentGuess = action.guess
      let currentFeedback;
      let previousGuesses;

      const distance = Math.abs(state.currentSolution-state.currentGuess)
      
      if(distance === 0) {
          currentFeedback = state.feedbackOptions[5]
      } else if(distance <= 10) {
          currentFeedback = state.feedbackOptions[4]
      } else if(distance <= 20) {
          currentFeedback = state.feedbackOptions[3]
      } else if(distance <= 30) {
          currentFeedback = state.feedbackOptions[2]
      } else {
          currentFeedback = state.feedbackOptions[1]
        }





      return Object.assign({}, state, {
        currentGuess: currentGuess,
        currentFeedback: currentFeedback,
        previousGuesses: previousGuesses


      })
    }
  }
