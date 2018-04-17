import React from 'react';
import Drag from './drag';
import Sine from './sine';

const minAmplitude = 0;
const maxAmplitude = 10;
const minFrequency = 0;
const maxFrequency = 60;
const minPhase = 0;
const maxPhase = 90;

export default class App extends React.Component {
  state = { amplitude: 5, frequency: 30, phase: 0 }

  handleAmplitudeChange = (event) => {
    this.setState({ amplitude: Number(event.target.value) });
  }

  handleFrequencyChange = (event) => {
    this.setState({ frequency: Number(event.target.value) });
  }

  handlePhaseChange = (event) => {
    this.setState({ phase: Number(event.target.value) });
  }

  handleVerticalMove = (delta) => {
    const proposedValue = this.state.amplitude + delta;

    if (proposedValue >= minAmplitude && proposedValue <= maxAmplitude) {
      this.setState({ amplitude: proposedValue });
    }
  }

  handleHorizontalMove = (delta) => {
    const proposedValue = this.state.frequency + delta;

    if (proposedValue >= minFrequency && proposedValue <= maxFrequency) {
      this.setState({ frequency: proposedValue });
    }
  }

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <label htmlFor="amplitude">Amplitude</label>
            <input id="amplitude" type="range" min={minAmplitude} max={maxAmplitude} value={this.state.amplitude} onChange={this.handleAmplitudeChange} />
          </fieldset>
          <fieldset>
            <label htmlFor="frequency">Frequency</label>
            <input id="frequency" type="range" min={minFrequency} max={maxFrequency} value={this.state.frequency} onChange={this.handleFrequencyChange} />
          </fieldset>
          <fieldset>
            <label htmlFor="phase">Phase</label>
            <input id="phase" type="range" min={minPhase} max={maxPhase} value={this.state.phase} onChange={this.handlePhaseChange} />
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
