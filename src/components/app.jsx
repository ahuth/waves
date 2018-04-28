import React from 'react';
import ControlledSine from './controlled-sine';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ControlledSine amplitude={5} frequency={30} phase={0} />
        <ControlledSine amplitude={5} frequency={30} phase={0} />
      </div>
    );
  }
}
