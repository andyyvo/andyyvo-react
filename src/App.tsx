import React from 'react';
import './App.css';
import './styles/styles.ts';
import { Button } from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Button
        variant={'primary'}
        color={'#FFCA00'}
        padding={'large'}
      >
        hello
      </Button>
    </div>
  );
}

export default App;
