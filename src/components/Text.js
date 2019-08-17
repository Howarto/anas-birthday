import React from 'react';
import './Text.css';

const Text = ({ text }) => {
  return(
    <div className="Text">
      <textarea className="Text__textarea" value={ text } readOnly />
    </div>
  );
};

export default Text;