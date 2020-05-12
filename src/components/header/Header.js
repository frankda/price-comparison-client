import React from 'react';
import DivideLine from '../svg/divide';

export default () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="" alt="" />
        <h1>Price Comparison</h1>
      </div>
      <div className="header__user">
        <p>Sign up</p>
        <DivideLine height={12} />
      </div>
    </header>
  );
}