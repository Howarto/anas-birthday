import React from 'react';
import './App.css';
import Text from '../components/Text';
import Navbar from './Navbar';
import store from '../store';

function App() {

  const { texts, currentStep } = store.getState();
  const currentText = texts[currentStep];

  return (
    <div className="App">
      <Text text={ currentText } />
      <Navbar />
    </div>
  );
}

export default App;
