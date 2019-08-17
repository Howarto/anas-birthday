import { combineReducers } from 'redux';
import texts from './texts';
import currentStep from './currentStep';

export default combineReducers({
  texts,
  currentStep
});