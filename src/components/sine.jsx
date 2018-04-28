import React from 'react';
import Wave from './wave';
import toPoints from '../utils/to-points';

export default function Sine({ amplitude, frequency, phase }) {
  const points = toPoints(amplitude, frequency, phase);
  return <Wave points={points} />;
}
