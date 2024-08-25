import React from 'react';
import './Button.css';

const Button = ({ symbol, label, onClick, isActive, color }) => {
  return (
    <div className="button">
      <button
        className={`${isActive ? '' : 'disabled'}`}
        disabled={!isActive}
        onClick={onClick}
        style={{ backgroundColor: color }}
      >
        {symbol}
      </button>
      <label className="button-label">{label}</label>
    </div>
  );
};

export default Button;