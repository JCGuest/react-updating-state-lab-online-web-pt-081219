import React from 'react';
import ReactDOM from 'react-dom';

import DigitalClicker from './components/DigitalClicker';
import YouTubeDebugger from './components/YouTubeDebugger';

ReactDOM.render(
  <div>
    <h1>counter:  <DigitalClicker /></h1>

    <h1><YouTubeDebugger /></h1>
  </div>,
  document.getElementById('global')
);
