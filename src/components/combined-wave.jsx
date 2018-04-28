import React from 'react';
import map from 'lodash.map';
import zip from 'lodash.zip';
import Wave from './wave';
import normalize from '../utils/normalize';
import toPoints from '../utils/to-points';

export default function CombinedWave({ waves }) {
  const wavePoints = map(waves, ({ amplitude, frequency, phase}) => {
    return toPoints(amplitude, frequency, phase);
  });

  const points = map(zip(...wavePoints), (wavePoints) => {
    return {
      x: wavePoints[0].x,
      y: normalize(wavePoints.reduce((acc, points) => acc + points.y, 0), 0, 2),
    };
  });

  return <Wave height={300} points={points} />;
}
