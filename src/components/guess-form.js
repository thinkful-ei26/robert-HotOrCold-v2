import React from 'react';
import { connect } from 'react-redux';
import { USER_GUESS } from '../actions';

import './guess-form.css';

export function GuessForm(props) {
    return (
        <form onSubmit={props.handleGuessButton} >
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" value={props.value} onChange={props.capturedGuess} required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess" />
        </form>
    );
};

