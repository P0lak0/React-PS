import React from 'react';

const Dice = ({ number }) => {
  return <img className="dice" src={`./images/dice${number}.png`} alt={`Dice ${number}`} />;
};

export default Dice;







