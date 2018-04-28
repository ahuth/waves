import fill from 'lodash.fill';
import toRadians from './to-radians';

const timeline = fill(Array(100), null);
const frequencyAdjuster = 600;
const phaseAdjuster = 4;
const twoPi = 2 * Math.PI;

// Convert the attributes of the waves into a timeline of points for graphing.
export default function toPoints(amplitude, frequency, phase) {
  const f = frequency / frequencyAdjuster;
  const ɸ = toRadians(phase * phaseAdjuster);
  return timeline.map((_, index) => {
    const value = amplitude * Math.sin(twoPi * (index + 1) * f + ɸ);
    return { x: index + 1, y: value };
  });
}
