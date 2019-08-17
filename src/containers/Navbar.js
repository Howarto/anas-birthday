import React from 'react';
import './Navbar.css';
import Button from '../components/Button';
import store from '../store';
import { setCurrentStep } from '../actions';

const Navbar = () => {
  const { texts, currentStep } = store.getState();

  let buttonsToShow;
  if (isLastStep()) {
    buttonsToShow = <Button onClick={ replayTexts } text="Replay" />
  }
  else if (currentStep === 14) {
    buttonsToShow = [
      <Button key="1" onClick={ increaseCurrentStep } text="Síiii, mi vidaaaaa" />,
      <Button key="2" text="Ni aunque me devuelvas el oro que nos robásteis" />
    ];
  }
  else {
    buttonsToShow = <Button onClick={ increaseCurrentStep } text="NEXT" />
  }

  return (
    <div className="Navbar">
      { buttonsToShow }
    </div>
  );
};

const isLastStep = () => {
  const { texts, currentStep } = store.getState();
  return currentStep === texts.length - 1;
};

const replayTexts = () => {
  const initialStep = 0;
  store.dispatch(setCurrentStep(initialStep));
};

const increaseCurrentStep = () => {
  const { texts, currentStep } = store.getState();
  if (currentStep < texts.length - 1) {
    const nextStep = currentStep + 1;
    store.dispatch(setCurrentStep(nextStep));
  }
};

export default Navbar;