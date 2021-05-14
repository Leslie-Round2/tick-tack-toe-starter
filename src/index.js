import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Amplify from 'aws-amplify'
import config from './aws-exports'
import Game from './Game';
import App from './App';

Amplify.configure(config);

ReactDOM.render(
  <App />,
  // <Game />,
  document.getElementById('root')
);
