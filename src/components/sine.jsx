import React from 'react';
import fill from 'lodash.fill';
import toRadians from '../utils/to-radians';
import Wave from './wave';

const timeline = fill(Array(100), null);
const frequencyAdjuster = 600;
const phaseAdjuster = 4;
const twoPi = 2 * Math.PI;

export default function Sine({ amplitude, frequency, phase }) {
  const f = frequency / frequencyAdjuster;
  const ɸ = toRadians(phase * phaseAdjuster);

  const points = timeline.map((_, index) => {
    const value = amplitude * Math.sin(twoPi * (index + 1) * f + ɸ);
    return { x: index + 1, y: value };
  });

  return <Wave points={points} />;
}
