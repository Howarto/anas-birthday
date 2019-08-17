import React, { Component } from 'react';
import './Text.css';
import store from '../store';
import { setAnimatingText } from '../actions';

class Text extends Component {

  constructor(props) {
    super(props);
    this.textareaRef = React.createRef();
  }

  componentDidMount() {
    this.clearTextArea();
    this.insertTextWithAnimation(this.props.text);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.text !== this.props.text) {
      this.componentDidMount();
    }
  }

  clearTextArea() {
    this.textareaRef.current.value = '';
  }

  insertTextWithAnimation(textToInsert) {
    this.lockContinueButtonUsingState();

    this.insertTextWithAnimationImp(this.textareaRef.current, textToInsert, 0, () => {
      this.unlockContinueButtonUsingState();
    });
  }

  insertTextWithAnimationImp(textareaElement, textToInsert, n, callback) {
    if (n < textToInsert.length) {
      textareaElement.value += textToInsert[n];
      setTimeout(() => {
        this.insertTextWithAnimationImp(textareaElement, textToInsert, n + 1, callback);
      }, this.getRandomInt(0, 0));
    }
    else {
      callback();
    }
  }

  isContinueButtonBlocked() {
    const { animatingText } = store.getState();
    return animatingText;
  }

  lockContinueButtonUsingState() {
    store.dispatch(setAnimatingText(true));
  }

  unlockContinueButtonUsingState() {
    store.dispatch(setAnimatingText(false));
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  render() {
    return(
      <div className="Text">
        <textarea ref={ this.textareaRef } className="Text__textarea" readOnly />
      </div>
    );
  }

};


export default Text;