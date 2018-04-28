import React from 'react';
import Drag from './drag';
import Sine from './sine';

const minAmplitude = 0;
const maxAmplitude = 10;
const minFrequency = 0;
const maxFrequency = 100;
const minPhase = 0;
const maxPhase = 90;

const styles = {
  container: {
    display: 'flex',
  },
};

export default class ControlledSine extends React.Component {
  handleAmplitudeChange = (event) => {
    this.props.onChange('amplitude', Number(event.target.value))
  }

  handleFrequencyChange = (event) => {
    this.props.onChange('frequency', Number(event.target.value))
  }

  handlePhaseChange = (event) => {
    this.props.onChange('phase', Number(event.target.value))
  }

  handleVerticalMove = (delta) => {
    const proposedValue = this.props.amplitude + delta;

    if (proposedValue >= minAmplitude && proposedValue <= maxAmplitude) {
      this.props.onChange('amplitude', proposedValue)
    }
  }

  handleHorizontalMove = (delta) => {
    const proposedValue = this.props.frequency + delta;

    if (proposedValue >= minFrequency && proposedValue <= maxFrequency) {
      this.props.onChange('frequency', proposedValue)
    }
  }

  render() {
    return (
      <div style={styles.container}>
        <Drag
          onHorizontal={this.handleHorizontalMove}
          onVertical={this.handleVerticalMove}
        >
          <Sine
            amplitude={this.props.amplitude}
            frequency={this.props.frequency}
            phase={this.props.phase}
          />
        </Drag>
        <form>
          <fieldset>
            <label htmlFor="amplitude">Amplitude</label>
            <input id="amplitude" type="range" min={minAmplitude} max={maxAmplitude} value={this.props.amplitude} onChange={this.handleAmplitudeChange} />
          </fieldset>
          <fieldset>
            <label htmlFor="frequency">Frequency</label>
            <input id="frequency" type="range" min={minFrequency} max={maxFrequency} value={this.props.frequency} onChange={this.handleFrequencyChange} />
          </fieldset>
          <fieldset>
            <label htmlFor="phase">Phase</label>
            <input id="phase" type="range" min={minPhase} max={maxPhase} value={this.props.phase} onChange={this.handlePhaseChange} />
          </fieldset>
        </form>
      </div>
    );
  }
}
