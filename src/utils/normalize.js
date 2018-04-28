// Ensure that data fits within a range for graphing purposes.
export default function normalize(value, min, max) {
  return (value - min) / (max - min);
}
