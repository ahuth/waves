import React from 'react';
import CombinedWave from './combined-wave';
import ControlledSine from './controlled-sine';

export default class App extends React.Component {
  state = {
    1: {
      amplitude: 5, frequency: 10, phase: 0,
    },
    2: {
      amplitude: 5, frequency: 80, phase: 60,
    },
  }

  handleChange(wave, attribute, value) {
    this.setState({
      [wave]: Object.assign({}, this.state[wave], {
        [attribute]: value,
      }),
    });
  }

  render() {
    return (
      <div>
        <ControlledSine
          amplitude={this.state[1].amplitude}
          frequency={this.state[1].frequency}
          phase={this.state[1].phase}
          onChange={(attribute, value) => this.handleChange(1, attribute, value)}
        />
        <ControlledSine
          amplitude={this.state[2].amplitude}
          frequency={this.state[2].frequency}
          phase={this.state[2].phase}
          onChange={(attribute, value) => this.handleChange(2, attribute, value)}
        />
        <CombinedWave waves={this.state} />
      </div>
    );
  }
}
