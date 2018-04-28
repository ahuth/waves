import React from 'react';
import { LineChart } from 'react-easy-chart';

export default function Wave({ height, points }) {
  return (
    <LineChart
      interpolate="cardinal"
      yDomainRange={[-10, 10]}
      data={[points]}
      height={height}
      width={800}
    />
  );
}
