import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
import { bindActionCreators } from 'redux';

export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentGuess: '',
            currentSolution: Math.floor(Math.random(1, 100) * 100),
            previousGuesses: [],
            currentFeedback: 'Make your Guess!',
            feedbackOptions: ['Make your Guess!', 'cold', 'less than warm', 'Kinda hot', 'hot', 'You Won. Click new game to play again' ]
        }

        this.handleGuessButton = this.handleGuessButton.bind(this);
        this.capturedGuess = this.capturedGuess.bind(this);
        this.setCurrentFeedback = this.setCurrentFeedback.bind(this);
    }

    capturedGuess(e) {
        this.setState({currentGuess: e.target.value});
    }

    setCurrentFeedback() {
        const distance = Math.abs(this.state.currentSolution-this.state.currentGuess)
        if(distance === 0) {
            this.setState({currentFeedback: this.state.feedbackOptions[5]})
        }
        if(distance <= 10) {
            this.setState({currentFeedback: this.state.feedbackOptions[4]})
        }
        if(distance > 10 && distance <= 20) {
            this.setState({currentFeedback: this.state.feedbackOptions[3]})
        }
        if(distance > 20 && distance <= 30) {
            this.setState({currentFeedback: this.state.feedbackOptions[2]})
        }
        if(distance > 30) {
            this.setState({currentFeedback: this.state.feedbackOptions[1]})
        }
    }

    handleGuessButton(e) {
        e.preventDefault();
        console.log(this.state.currentGuess);
        console.log(this.state.currentSolution);
        this.setState({previousGuesses: this.state.previousGuesses.concat(this.state.currentGuess)});
        this.setCurrentFeedback();
    }

    render() { 
        const Game = this.state
        return (
        <div>
            <Header />
            <GuessSection feedback={Game.currentFeedback} handleGuessButton={this.handleGuessButton} value={this.state.value} capturedGuess={this.capturedGuess}/>
            <GuessCount count={Game.previousGuesses.length} />
            <GuessList guesses={Game.previousGuesses} />
        </div>
    );
    }
}

