import React from 'react';
import './Button.css';

const Button = ({ onClick = () =>{}, text }) => {
  return (
    <div className="Button" onClick={ onClick }>
      <div className="Button__text">{ text }</div>
    </div>
  );
};

export default Button;