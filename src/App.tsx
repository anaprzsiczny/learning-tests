import React from 'react';
import './App.css';
import Alert from './components/alert/alert';
import Avatar from './components/avatar/avatar';
import Lista from './components/lista/lista';

function App() {
  return (
    <div className="App">
      <body>
        <Avatar />
        <Lista />
        <Alert />
      </body>
    </div>
  );
}

export default App;
