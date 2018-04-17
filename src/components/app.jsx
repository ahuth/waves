import React from 'react';
import Drag from './drag';
import Sine from './sine';

export default class App extends React.Component {
  state = { amplitude: 5, frequency: 30, phase: 0 }

  handleAmplitudeChange = (event) => {
    this.setState({ amplitude: event.target.value });
  }

  handleFrequencyChange = (event) => {
    this.setState({ frequency: event.target.value });
  }

  handlePhaseChange = (event) => {
    this.setState({ phase: event.target.value });
  }

  handleVerticalMove = (delta) => {
    this.setState({ amplitude: this.state.amplitude + delta });
  }

  handleHorizontalMove = (delta) => {
    this.setState({ frequency: this.state.frequency + delta });
  }

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <label htmlFor="amplitude">Amplitude</label>
            <input id="amplitude" type="range" min="0" max="10" value={this.state.amplitude} onChange={this.handleAmplitudeChange} />
          </fieldset>
          <fieldset>
            <label htmlFor="frequency">Frequency</label>
            <input id="frequency" type="range" min="0" max="60" value={this.state.frequency} onChange={this.handleFrequencyChange} />
          </fieldset>
          <fieldset>
            <label htmlFor="phase">Phase</label>
            <input id="phase" type="range" min="0" max="90" value={this.state.phase} onChange={this.handlePhaseChange} />
          </fieldset>
        </form>
        <Drag
          onHorizontal={this.handleHorizontalMove}
          onVertical={this.handleVerticalMove}
        >
          <Sine
            amplitude={this.state.amplitude}
            frequency={this.state.frequency}
            phase={this.state.phase}
          />
        </Drag>
      </div>
    );
  }
}
