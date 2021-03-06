import React from 'react'
import { connect } from 'react-redux';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
    return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            <GuessForm handleGuessButton={props.handleGuessButton} value={props.value} capturedGuess={props.capturedGuess} />
        </section>
    );
}

