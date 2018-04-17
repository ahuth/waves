import React from 'react';
import fill from 'lodash.fill';
import { LineChart } from 'react-easy-chart';
import toRadians from '../utils/to-radians';

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
        <figure>
          y(t) = {this.state.amplitude} * sin(2πt * {this.state.frequency} + {toRadians(this.state.phase * 4)})
        </figure>
        <LineChart
          interpolate="cardinal"
          yDomainRange={[-10, 10]}
          data={[fill(Array(10), null).map((_, index) => {
            const { amplitude, frequency, phase } = this.state;
            const value = amplitude * Math.sin(2 * Math.PI * (index + 1) * (frequency / 100) + toRadians(phase * 4));
            return { x: index + 1, y: value };
          })]}
        />
      </div>
    );
  }
}
