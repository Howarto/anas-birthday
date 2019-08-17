import { combineReducers } from 'redux';
import texts from './texts';
import currentStep from './currentStep';
import animatingText from './animatingText';

export default combineReducers({
  texts,
  currentStep,
  animatingText
});