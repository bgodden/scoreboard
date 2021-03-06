import React, { Component } from 'react';

class Stopwatch extends Component {

    state = {
        isRunning: false
    };

    handleStopwatch = () => {
        this.setState ({
            isRunning: !this.state.isRunning
        });
    }

    componentDidMount() {
        
    }

    tick = () => {

    }

    render() {
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">0</span>
                <button onClick={ this.handleStopwatch }>
                    { this.state.isRunning ? "Stop" : "Start" }
                </button>
                <button>Reset</button>
            </div>
        );
    }
}

export default Stopwatch;