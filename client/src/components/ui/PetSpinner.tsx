// import React, { useState, useEffect } from 'react';

// const cliSpinners = require('cli-spinners');

// export default function AppSpinner(): JSX.Element {
//   const [progress, setProgress] = useState(0);
//   useEffect(() => {
//     let timeout: NodeJS.Timeout | undefined;
//     if (progress < 100) {
//       timeout = setTimeout(() => setProgress(progress + 25), 700);
//     }
//     return () => clearTimeout(timeout);
//   }, [progress]);
//   return <div>{cliSpinners.dots.frames[progress % cliSpinners.dots.frames.length]}</div>;
// }

import React, { useState, useEffect } from 'react';
import cliSpinners from 'cli-spinners';

type SpinnerFrame = {
  interval: number;
  frames: string[];
};

type Spinner = {
  [key: string]: SpinnerFrame;
};

export default function AppSpinner(): JSX.Element {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;

    if (progress < 100) {
      timeout = setTimeout(() => setProgress((prevProgress) => prevProgress + 25), 400);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [progress]);

  const spinnerName = 'monkey';
  const spinnerFrames: string[] = cliSpinners[spinnerName].frames;
  const currentFrame: string = spinnerFrames[progress % spinnerFrames.length];

  return  <div style={{ fontSize: '48px' }}>{currentFrame}</div>;
}
