import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <h1>Gabriel</h1>;
}

const container = document.getElementById('root');
container ? ReactDOM.render(<App />, container) : null;